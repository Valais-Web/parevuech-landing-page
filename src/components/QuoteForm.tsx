import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ChevronLeft, ChevronRight, CheckCircle2, Info } from "lucide-react";

// Pricing per linear meter based on height and fixation type
const PRICES_PER_ML = {
  "90": {
    "sceller": { min: 449.17, max: 605.00 },
    "pdb": { min: 472.00, max: 635.25 }
  },
  "110": {
    "sceller": { min: 563.75, max: 763.31 },
    "pdb": { min: 591.25, max: 796.58 }
  },
  "145": {
    "sceller": { min: 609.58, max: 766.33 },
    "pdb": { min: 637.08, max: 882.29 }
  },
  "180": {
    "sceller": { min: 866.25, max: 1241.62 },
    "pdb": { min: 879.38, max: 1256.06 }
  }
};

const QuoteForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [estimation, setEstimation] = useState(0);
  
  const [formData, setFormData] = useState({
    // Step 1 - Project
    clientType: '',
    productType: 'pare-vue',
    objective: '',
    timeline: '',
    
    // Step 2 - Dimensions
    totalLength: '',
    height: '',
    fixationType: '',
    
    // Step 3 - Contact
    postalCode: '',
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    
    // Tracking
    gclid: new URLSearchParams(window.location.search).get('gclid') || ''
  });

  const calculateEstimation = () => {
    const length = parseFloat(formData.totalLength) || 0;
    const height = formData.height || '1800';
    const fixationType = formData.fixationType || 'sceller';
    
    // Special handling for custom heights (sur mesure)
    if (height === 'autre') {
      const minPricing = PRICES_PER_ML['90']?.[fixationType];
      const maxPricing = PRICES_PER_ML['180']?.[fixationType];
      
      if (!minPricing || !maxPricing) {
        return { estimatedPrice: 0, lowerBound: 0, upperBound: 0 };
      }
      
      // Apply +10% to both min and max prices for custom heights
      const lowerBound = Math.round(length * minPricing.min * 1.1);
      const upperBound = Math.round(length * maxPricing.max * 1.1);
      const estimatedPrice = Math.round((lowerBound + upperBound) / 2);
      
      return { estimatedPrice, lowerBound, upperBound };
    }
    
    // Map height values to pricing keys for standard heights
    const heightKey = height === '900' ? '90' : 
                     height === '1100' ? '110' : 
                     height === '1450' ? '145' : '180';
    
    // Get pricing for the specific height and fixation type
    const pricing = PRICES_PER_ML[heightKey]?.[fixationType];
    
    if (!pricing) {
      return { estimatedPrice: 0, lowerBound: 0, upperBound: 0 };
    }
    
    const lowerBound = Math.round(length * pricing.min);
    const upperBound = Math.round(length * pricing.max);
    const estimatedPrice = Math.round((lowerBound + upperBound) / 2);
    
    return { estimatedPrice, lowerBound, upperBound };
  };

  const handleInputChange = (field: string, value: string) => {
    const newData = { ...formData, [field]: value };
    setFormData(newData);
  };

  const nextStep = () => {
    // Send GTM event
    if (typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push({
        event: 'form_step_next',
        form_step: currentStep,
        form_name: 'quote_form'
      });
    }
    
    setCurrentStep(prev => prev + 1);
  };

  const prevStep = () => {
    setCurrentStep(prev => prev - 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const { estimatedPrice, lowerBound, upperBound } = calculateEstimation();
    
    // Prepare data for submission
    const submissionData = {
      ...formData,
      estimatedPrice,
      priceRange: `${lowerBound} - ${upperBound} CHF`,
      submittedAt: new Date().toISOString()
    };

    // Send to dataLayer for GTM
    if (typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push({
        event: 'lead_submit',
        form_name: 'quote_form',
        client_type: formData.clientType,
        product_type: formData.productType,
        objective: formData.objective,
        timeline: formData.timeline,
        estimated_price: estimatedPrice,
        price_range: `${lowerBound} - ${upperBound} CHF`,
        surface_m2: (parseFloat(formData.totalLength) || 0) * ((parseInt(formData.height) || 1800) / 1000),
        fixation_type: formData.fixationType,
        height: formData.height,
        total_length: formData.totalLength,
        postal_code: formData.postalCode,
        first_name: formData.firstName,
        last_name: formData.lastName,
        phone: formData.phone,
        email: formData.email,
        gclid: formData.gclid
      });
    }

    // This will be caught by Netlify Forms
    try {
      // Build Netlify payload exactly like the working example
      const netlifyFormData = new FormData();
      netlifyFormData.append('form-name', 'quote-form');
      netlifyFormData.append('gclid', formData.gclid);
      netlifyFormData.append('clientType', formData.clientType);
      netlifyFormData.append('productType', formData.productType);
      netlifyFormData.append('objective', formData.objective);
      netlifyFormData.append('timeline', formData.timeline);
      netlifyFormData.append('totalLength', formData.totalLength);
      netlifyFormData.append('height', formData.height);
      netlifyFormData.append('fixationType', formData.fixationType);
      netlifyFormData.append('postalCode', formData.postalCode);
      netlifyFormData.append('firstName', formData.firstName);
      netlifyFormData.append('lastName', formData.lastName);
      netlifyFormData.append('phone', formData.phone);
      netlifyFormData.append('email', formData.email);
      netlifyFormData.append('estimatedPrice', estimatedPrice.toString());
      netlifyFormData.append('priceRange', `${lowerBound} - ${upperBound} CHF`);
      netlifyFormData.append('submittedAt', new Date().toISOString());

      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(netlifyFormData as any).toString(),
      });


      // Treat 2xx and 3xx as success (Netlify may respond with a redirect)
      if (response.ok || (response.status >= 300 && response.status < 400)) {
        setEstimation(estimatedPrice);
        setIsSubmitted(true);
      } else {
        console.warn('Form submission non-OK:', response.status, response.statusText);
        setEstimation(estimatedPrice);
        setIsSubmitted(true);
      }
    } catch (error) {
      console.error('Form submission error:', error);
      // Show success state to the user even if AJAX fails (form still detected by Netlify)
      setEstimation(estimatedPrice);
      setIsSubmitted(true);
    }
  };

  const isStepValid = (step: number) => {
    switch (step) {
      case 1:
        return formData.clientType && formData.objective && formData.timeline;
      case 2:
        return formData.totalLength && formData.height && formData.fixationType;
      case 3:
        return formData.postalCode && formData.firstName && formData.lastName && formData.email && formData.phone;
      default:
        return false;
    }
  };

  if (isSubmitted) {
    const { lowerBound, upperBound } = calculateEstimation();
    
    return (
      <section id="devis" className="py-20 bg-gradient-to-br from-brand-cream/30 to-white">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white rounded-3xl p-12 shadow-2xl fade-in-up">
              <CheckCircle2 className="w-20 h-20 text-green-500 mx-auto mb-6" />
              
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Merci pour votre demande !
              </h2>
              
              <div className="bg-brand-cream rounded-2xl p-6 mb-6">
                <p className="text-lg font-bold text-brand-green mb-2">
                  Votre estimation indicative :
                </p>
                <p className="text-3xl font-bold text-gray-900">
                  {lowerBound.toLocaleString()} - {upperBound.toLocaleString()} CHF
                </p>
                <p className="text-sm text-gray-600 mt-2">
                  *Estimation indicative basée sur vos données
                </p>
              </div>
              
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Votre estimation et notre catalogue arrivent dans votre boîte e-mail. 
                  Un spécialiste vous recontactera dans les plus brefs délais pour affiner votre projet 
                  et organiser l'installation professionnelle.
                </p>
              
                <div className="bg-gray-50 rounded-xl p-4 text-sm text-gray-600">
                  <p>
                    <strong>Service complet inclus :</strong> Installation professionnelle disponible dans toute la Suisse romande. 
                    Le prix final sera validé après vérification technique et choix définitifs (motifs, ancrages, environnement).
                  </p>
                </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="devis" className="py-20 bg-gradient-to-br from-brand-cream/30 to-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 fade-in-up">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Obtenir mon devis personnalisé
            </h2>
            <p className="text-xl text-gray-600">
              Quelques informations pour une estimation précise et immédiate
            </p>
          </div>

          {/* Progress Bar */}
          <div className="mb-12 fade-in-up">
            <div className="flex justify-between items-center mb-4">
              {[1, 2, 3].map((step) => (
                <div key={step} className={`flex items-center ${step < 3 ? 'flex-1' : ''}`}>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                    step <= currentStep ? 'bg-brand-green text-white' : 'bg-gray-200 text-gray-500'
                  }`}>
                    {step}
                  </div>
                  {step < 3 && (
                    <div className={`flex-1 h-2 mx-4 rounded ${
                      step < currentStep ? 'bg-brand-green' : 'bg-gray-200'
                    }`}></div>
                  )}
                </div>
              ))}
            </div>
            <div className="flex justify-between text-sm text-gray-600">
              <span>Votre projet</span>
              <span>Dimensions</span>
              <span>Contact</span>
            </div>
          </div>

          <form 
            onSubmit={handleSubmit}
            name="quote-form"
            method="POST"
            action="/"
            data-netlify="true"
            netlify-honeypot="bot-field"
            className="bg-white rounded-3xl p-8 shadow-2xl fade-in-up"
          >
            {/* Netlify form detection */}
            <input type="hidden" name="form-name" value="quote-form" />
            <input type="hidden" name="gclid" value={formData.gclid} />
            <input type="hidden" name="clientType" value={formData.clientType} />
            <input type="hidden" name="productType" value={formData.productType} />
            <input type="hidden" name="objective" value={formData.objective} />
            <input type="hidden" name="timeline" value={formData.timeline} />
            <input type="hidden" name="totalLength" value={formData.totalLength} />
            <input type="hidden" name="height" value={formData.height} />
            <input type="hidden" name="fixationType" value={formData.fixationType} />
            <input type="hidden" name="postalCode" value={formData.postalCode} />
            <input type="hidden" name="firstName" value={formData.firstName} />
            <input type="hidden" name="lastName" value={formData.lastName} />
            <input type="hidden" name="phone" value={formData.phone} />
            <input type="hidden" name="email" value={formData.email} />
            <p hidden>
              <label>Don't fill this out: <input name="bot-field" /></label>
            </p>

            {/* Step 1: Project */}
            {currentStep === 1 && (
              <div className="space-y-8" data-gtm="form_start">
                <div>
                  <Label className="text-lg font-semibold text-gray-900 mb-4 block">
                    Vous êtes :
                  </Label>
                  <RadioGroup 
                    value={formData.clientType} 
                    onValueChange={(value) => handleInputChange('clientType', value)}
                    className="space-y-3"
                  >
                    <div className="flex items-center space-x-3 p-4 border border-gray-200 rounded-xl hover:border-brand-green transition-colors">
                      <RadioGroupItem value="particulier" id="particulier" />
                      <Label htmlFor="particulier" className="flex-1 cursor-pointer">Particulier</Label>
                    </div>
                    <div className="flex items-center space-x-3 p-4 border border-gray-200 rounded-xl hover:border-brand-green transition-colors">
                      <RadioGroupItem value="professionnel" id="professionnel" />
                      <Label htmlFor="professionnel" className="flex-1 cursor-pointer">Professionnel (architecte, paysagiste, entreprise)</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div>
                  <Label className="text-lg font-semibold text-gray-900 mb-4 block">
                    Objectif prioritaire :
                  </Label>
                  <RadioGroup 
                    value={formData.objective} 
                    onValueChange={(value) => handleInputChange('objective', value)}
                    className="space-y-3"
                  >
                    {[
                      'Intimité totale',
                      'Occultation partielle', 
                      'Brise-vent',
                      'Décoratif',
                      'Technique (cache clim/PAC)'
                    ].map((objective) => (
                      <div key={objective} className="flex items-center space-x-3 p-4 border border-gray-200 rounded-xl hover:border-brand-green transition-colors">
                        <RadioGroupItem value={objective.toLowerCase()} id={objective} />
                        <Label htmlFor={objective} className="flex-1 cursor-pointer">{objective}</Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>

                <div>
                  <Label htmlFor="timeline" className="text-lg font-semibold text-gray-900 mb-4 block">
                    Délais souhaités :
                  </Label>
                  <Select value={formData.timeline} onValueChange={(value) => handleInputChange('timeline', value)}>
                    <SelectTrigger className="h-14 text-lg border-gray-300">
                      <SelectValue placeholder="Sélectionnez vos délais" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="immediat">Immédiat</SelectItem>
                      <SelectItem value="6weeks">&lt; 6 semaines</SelectItem>
                      <SelectItem value="1.5-3months">1.5 mois à 3 mois</SelectItem>
                      <SelectItem value="3months+">&gt; 3 mois</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            )}

            {/* Step 2: Dimensions */}
            {currentStep === 2 && (
              <div className="space-y-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="totalLength" className="text-lg font-semibold text-gray-900 mb-4 block">
                      Longueur totale (mètres) :
                    </Label>
                    <Input
                      id="totalLength"
                      type="number"
                      min="0.5"
                      step="0.1"
                      value={formData.totalLength}
                      onChange={(e) => handleInputChange('totalLength', e.target.value)}
                      placeholder="Ex: 12.5"
                      className="h-14 text-lg border-gray-300"
                    />
                  </div>

                  <div>
                    <Label htmlFor="height" className="text-lg font-semibold text-gray-900 mb-4 block">
                      Hauteur souhaitée :
                    </Label>
                    <Select value={formData.height} onValueChange={(value) => handleInputChange('height', value)}>
                      <SelectTrigger className="h-14 text-lg border-gray-300">
                        <SelectValue placeholder="Sélectionnez la hauteur" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="900">900 mm</SelectItem>
                        <SelectItem value="1100">1100 mm</SelectItem>
                        <SelectItem value="1450">1450 mm</SelectItem>
                        <SelectItem value="1800">1800 mm</SelectItem>
                        <SelectItem value="autre">Autre (sur mesure)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Label className="text-lg font-semibold text-gray-900">
                      Type de fixation :
                    </Label>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Info className="w-5 h-5 text-gray-400 hover:text-gray-600 cursor-help" />
                        </TooltipTrigger>
                        <TooltipContent className="max-w-sm p-4">
                          <div className="space-y-3">
                            <div>
                              <p className="font-semibold text-sm">À sceller :</p>
                              <p className="text-xs">Il faut creuser et réaliser un petit socle en béton (point d'ancrage) avant d'y sceller le poteau. Solution robuste et durable.</p>
                            </div>
                            <div>
                              <p className="font-semibold text-sm">Plaque de base (PDB) :</p>
                              <p className="text-xs">Le poteau se fixe sur une plaque métallique que l'on visse directement sur un socle en béton déjà existant. Plus simple et rapide si vous avez déjà une dalle béton.</p>
                            </div>
                          </div>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                  <RadioGroup 
                    value={formData.fixationType} 
                    onValueChange={(value) => handleInputChange('fixationType', value)}
                    className="space-y-3"
                  >
                    <div className="flex items-center space-x-3 p-4 border border-gray-200 rounded-xl hover:border-brand-green transition-colors">
                      <RadioGroupItem value="sceller" id="fixation-sceller" />
                      <Label htmlFor="fixation-sceller" className="flex-1 cursor-pointer">
                        À sceller
                      </Label>
                    </div>
                    <div className="flex items-center space-x-3 p-4 border border-gray-200 rounded-xl hover:border-brand-green transition-colors">
                      <RadioGroupItem value="pdb" id="fixation-pdb" />
                      <Label htmlFor="fixation-pdb" className="flex-1 cursor-pointer">
                        Plaque de base (PDB)
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                {/* Removed real-time estimation - will show only after submission */}
              </div>
            )}

            {/* Step 3: Contact */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="firstName" className="text-lg font-semibold text-gray-900 mb-2 block">
                      Prénom *
                    </Label>
                    <Input
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange('firstName', e.target.value)}
                      className="h-12 border-gray-300"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="lastName" className="text-lg font-semibold text-gray-900 mb-2 block">
                      Nom *
                    </Label>
                    <Input
                      id="lastName"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange('lastName', e.target.value)}
                      className="h-12 border-gray-300"
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="postalCode" className="text-lg font-semibold text-gray-900 mb-2 block">
                    Code postal *
                  </Label>
                  <Input
                    id="postalCode"
                    value={formData.postalCode}
                    onChange={(e) => handleInputChange('postalCode', e.target.value)}
                    placeholder="Ex: 1000"
                    className="h-12 border-gray-300"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="phone" className="text-lg font-semibold text-gray-900 mb-2 block">
                    Téléphone *
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    placeholder="+41 XX XXX XX XX"
                    className="h-12 border-gray-300"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-lg font-semibold text-gray-900 mb-2 block">
                    E-mail *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="votre@email.ch"
                    className="h-12 border-gray-300"
                    required
                  />
                </div>

              </div>
            )}

            {/* Navigation Buttons */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              {currentStep < 3 ? (
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                  {currentStep > 1 ? (
                    <Button
                      type="button"
                      onClick={prevStep}
                      variant="outline"
                      className="flex items-center space-x-2 w-full sm:w-auto order-2 sm:order-1"
                    >
                      <ChevronLeft className="w-4 h-4" />
                      <span>Précédent</span>
                    </Button>
                  ) : (
                    <div className="hidden sm:block"></div>
                  )}

                  <Button
                    type="button"
                    onClick={nextStep}
                    disabled={!isStepValid(currentStep)}
                    className="btn-primary flex items-center justify-center space-x-2 w-full sm:w-auto order-1 sm:order-2"
                    data-gtm="form_step_next"
                  >
                    <span>Suivant</span>
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>
              ) : (
                <div className="flex flex-col sm:flex-row gap-4 sm:justify-between sm:items-center">
                  <Button
                    type="button"
                    onClick={prevStep}
                    variant="outline"
                    className="flex items-center justify-center space-x-2 w-full sm:w-auto order-2 sm:order-1"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    <span>Précédent</span>
                  </Button>
                  
                  <Button
                    type="submit"
                    disabled={!isStepValid(3)}
                    className="btn-primary flex items-center justify-center space-x-2 w-full sm:w-auto order-1 sm:order-2"
                    data-gtm="lead_submit"
                  >
                    <span>Recevoir mon devis</span>
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default QuoteForm;