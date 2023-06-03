# Cvičení: Routování

Cvičení do breakrooms pro kurz JavaScript 2 od Czechitas.

## 1. Chybová stránka

V naší aplikaci *Nákupy* budeme chtít ošetřit situaci, kdy uživatel zadá do prohlížeče adresu stránky, která neexistuje. Vytvoříme proto novou stránku zobrazující chybové hlášení.

- Vyjděte z projektu *Nákupy* v repozitáři [projekt-nakupy-routing](https://github.com/Czechitas-podklady-WEB/projekt-nakupy-routing).
- Vytvořte komponentu `ErrorPage`, která zobrazí nějakou hezkou hlášku typu "tato stránka neexistuje".
- Routovací podmínku v hlavním `index.js` aplikaci rozšiřte o `else` blok a zobrazte v něm vaši chybovou stránku.
- Vyzkoušejte, že při zadání neexistující adresy a zobrazí vaše nová chybová stránka.

## 2. Stránka s recepty
V tomto cvičení oživíme stránku s recepty a zobrazíme jejich seznam. Pokračujte v projektu z předchozího cvičení.

- Do komponenty `RecipesPage` přidejte /props* `recipes`, ve které komponenta obdrží seznam všech receptů.
- V hlavním souboru `index.js` pro celou aplikaci této komponentě předejte v *props* `recipes` hodnotu `loading` jako jsme to dělali s komponentou `ShopList`. Podle této hodnoty komponenta pozná, že si má načíst data.
- Podobně jako v komponentě `ShopList` načítáme položky seznamu, načtěte v komponentě `RecipesPage` seznam všech receptů. Tento získáte dotazem GET z API endpointu

```javascript
https://nakupy.kodim.app/api/me/recipes
```

Nezapomeňte, že musíte být správně autentizovaní vaším tokenem. Získaná data zatím vypište pouze do konzole, abyste zjistili, jakou mají strukturu.
- Prohlédněte si strukturu jednoho receptu, jaké má vlastnosti a hodnoty. Podle této struktury navrhněte komponentu `Recipe`, která bude zobrazovat jeden recept. Rozmyslete si, jaké bude mít *props*, jakou strukturu elementů atd. Komponentu vytvořte ve složce `RecipesPage/Recipe`.
- Vytvořte pro komponentu nějaké jednoduché styly.
- Zapojte vaši komponentu `Recipe` do stránky s recepty.
- Vyzkoušejte, že vaše aplikace správně funguje a že na stránce s recepty zobrazuje seznam lahodných receptů.