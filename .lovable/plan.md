

# Refonte visuelle de la Hero Section

## Probleme actuel
La section hero contient actuellement 3 elements empiles verticalement avec des styles differents :
1. Une carte blanche pour le prix (fond blanc, ombre, coins arrondis)
2. Une rangee de badges verts (fond vert clair, bordures)
3. Un bouton CTA (fond vert fonce)

Cette accumulation cree une surcharge visuelle et manque de fluidite.

## Solution proposee : Integration fluide et hierarchie claire

### Approche de design
Fusionner visuellement les elements tout en maintenant une hierarchie claire de l'information :

```text
+--------------------------------------------------+
|  TITRE PRINCIPAL                                  |
|                                                   |
|  Description du produit...                        |
|                                                   |
|  Des 350 CHF / metre   <-- Prix en texte simple  |
|  Installation incluse  <-- Sous-titre discret    |
|                                                   |
|  [Obtenir mon devis]   <-- Bouton CTA principal  |
|                                                   |
|  ✓ Sur mesure  ✓ Premium  ✓ Suisse romande       |
|  ^-- Badges en ligne, style leger                |
+--------------------------------------------------+
```

### Changements specifiques

1. **Prix integre au texte** : Au lieu d'une carte separee, afficher le prix en grand texte directement, avec un style coherent avec le reste du contenu hero (texte blanc/clair sur fond sombre)

2. **Bouton CTA immediat** : Placer le bouton juste apres le prix pour une action immediate

3. **Badges en checkmarks** : Transformer les badges en liste horizontale avec des coches, style plus leger et integre (texte blanc avec icones)

### Structure du code

```text
h1 (Titre)
   |
p (Description)
   |
div (Prix + CTA)
  |-- span "Des 350 CHF / metre"
  |-- span "Installation incluse"
  |-- Button (CTA)
   |
div (Features avec checkmarks)
  |-- ✓ Fabrication sur mesure
  |-- ✓ Finitions premium
  |-- ✓ Service local
```

### Styles appliques

- **Prix** : `text-3xl md:text-4xl font-bold text-white` avec le detail `/metre` en `text-xl text-white/70`
- **Sous-titre prix** : `text-sm text-white/60`
- **Bouton** : Inchange mais place juste apres le prix
- **Features** : Icones Check de Lucide, texte `text-white/80`, disposition `flex flex-wrap gap-x-6 gap-y-2`

### Avantages de cette approche

- Supprime l'effet "boites empilees"
- Cree une hierarchie visuelle claire : Titre > Description > Prix > Action > Preuves
- Meilleure integration avec le fond sombre de la hero
- Plus moderne et aeree
- Le prix reste tres visible grace a sa taille

### Fichier modifie
- `src/components/Hero.tsx`

