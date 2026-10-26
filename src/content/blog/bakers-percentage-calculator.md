---
title: "Baker's Percentage Calculator: One Formula, Any Batch Size"
description: "A baker's percentage calculator turns any recipe card into flour at 100% and everything else relative. Convert a card, sum the total, scale to any pan."
pubDate: 2026-10-26
author: "The Kitchen Calc Team"
tags: ["baker's percentage calculator", "baker's math percentages", "Baking & Dough"]
category: "Baking & Dough"
---

## A Recipe Card Is Not a Formula

A white bread card reads 500 g bread flour, 325 g water, 10 g salt, 6 g active dry yeast. Four weights, and nothing that tells you whether the loaf is wet, salty, or slow. Want 750 g of flour instead? Every other line has to be reworked by hand, and if you guess, the dough changes.

Write the same card as baker's percentages and it becomes a ratio you can hold in your head: **100% flour, 65% water, 2% salt, 1.2% yeast**. That is the whole system. Flour sits at 100, and every other number is that ingredient's weight divided by the flour weight, times 100.

Notice that 500 g and 325 g are the default pair on our [Dough Hydration Calculator](/dough-hydration-calculator/), which prints 65.0%. The calculator solves the water line; the four steps below solve all four without one.

## Flour Is the Only 100 Percent

Every flour in the formula goes into the 100% figure before you divide anything. A card with 400 g bread flour and 100 g whole wheat is a 500 g formula, so the percentages are computed against 500, not 400. Split it the other way and a 68% dough gets reported as 85%, which is the kind of error that makes a baker add water to a dough that was fine.

The same rule applies to anything that already contains flour:

- **Poolish or biga.** A 200 g poolish at 100% hydration carries 100 g flour and 100 g water. Both belong in the totals.
- **Sourdough starter.** Same arithmetic, and the [Sourdough Calculator](/sourdough-calculator/) subtracts the starter's flour and water from the totals so the number on your card matches the dough in the bowl.
- **Whole wheat or rye in a blend.** They count as flour. They do not count as an add-in, even if the card lists them last.

## Convert a Card in Four Steps

1. **Weigh the total flour.** All of it, including flour hiding inside a pre-ferment.
2. **Divide each remaining ingredient by that flour weight.** Multiply by 100 to read it as a percentage.
3. **Add the percentages to get the total.** It will be well over 100.
4. **To scale, multiply each percentage by the new flour weight.** That is the only multiplication the batch needs.

Running the white bread card through it:

| Ingredient | Weight | Divided by 500 g flour | Baker's percentage |
|---|---|---|---|
| Bread flour | 500 g | 500 ÷ 500 | 100% |
| Water | 325 g | 325 ÷ 500 | 65% |
| Salt | 10 g | 10 ÷ 500 | 2% |
| Active dry yeast | 6 g | 6 ÷ 500 | 1.2% |
| **Total** | **841 g** | | **168.2%** |

## The Percentages Add Past 100. That Is the Useful Part

The 168.2% at the bottom of that table is not the dough weight and it is not a mistake. It is the sum of every ingredient measured against the flour, and it gives you the one line that makes the system worth learning:

**Dough weight = flour weight × (1 + total percentage ÷ 100)**

For this card that is 500 × 1.682 = 841 g. Run it backward and you can hit a target weight exactly: a 9x5 pan wants 900 g of dough, so flour = 900 ÷ 1.682 = **535 g**, and everything else follows from the percentages. Water 348 g, salt 10.7 g, yeast 6.4 g.

Now add 30 g of butter and 20 g of sugar to the same card. The percentages become 6% fat and 4% sugar, the total rises to 178.2%, and the flour needed for that same 900 g pan drops to **505 g**. Enrichment takes up weight, so the dough holds less flour at the same size. Two loaves, identical pans, 30 g apart on flour.

| Same 900 g pan loaf | Lean card | With 6% butter, 4% sugar |
|---|---|---|
| Total percentage | 168.2% | 178.2% |
| Bread flour | 535 g | 505 g |
| Water | 348 g | 328 g |
| Salt | 10.7 g | 10.1 g |
| Active dry yeast | 6.4 g | 6.1 g |
| Butter | 0 g | 30 g |
| Sugar | 0 g | 20 g |

## The Reference Numbers Worth Memorizing

Four percentages cover almost every bread formula you will mix. The rest are arithmetic.

| Ingredient | Typical range | On 500 g flour | Note |
|---|---|---|---|
| Salt | 1.8–2.2% | 9–11 g | 2% is the default for lean bread |
| Yeast, active dry | 0.3–3% | 1.5–15 g | Depends on dough type and rise time |
| Sugar | 0–15% | 0–75 g | Above 10%, expect a slower rise |
| Butter or oil | 0–15% | 0–75 g | Count it as weight, not as water |
| Milk powder | 2–6% | 10–30 g | Adds color and softness to sandwich loaves |

The yeast line is where the range is widest, and our [Yeast Calculator](/yeast-calculator/) splits it by dough and by schedule. White bread runs 1.2% for a normal rise, 0.6% for a slow one, 1.8% for a fast one. Pizza drops to 0.8% standard and 0.3% for a cold ferment. Sweet dough climbs to 2% because sugar and fat slow the yeast down. Whole wheat sits at 1.5%.

Those figures are for active dry yeast. Instant yeast is multiplied by 0.75 and fresh cake yeast by 2, so the same loaf at 1.2% active dry is 0.9% instant or 2.4% fresh. Easy to get wrong in the other direction: 1.2% of 500 g is 6 g of active dry, which is a little under a full 7 g packet.

## Scale Any Batch With One Multiplication

This is the table most bakers keep on the fridge. It assumes 65% water, 2% salt, 1.2% active dry yeast, and nothing else.

| Flour | Water | Salt | Active dry yeast | Dough weight |
|---|---|---|---|---|
| 450 g | 293 g | 9 g | 5.4 g | 757 g |
| 500 g | 325 g | 10 g | 6 g | 841 g |
| 750 g | 488 g | 15 g | 9 g | 1,262 g |
| 1,000 g | 650 g | 20 g | 12 g | 1,682 g |

Double the flour and every line doubles. Nothing else in the method changes: same mixing, same bulk time, same oven. A written card is locked to one batch size. A formula is not.

## Same Formula, Different Pan

Pan sizes are just dough weights, and dough weights are just flour times the total percentage. A 9x5 inch pan holds roughly 800 to 850 g of dough, and an 8.5x4.5 inch pan holds 650 to 700 g. At 168.2% total, the smaller pan takes about 401 g of flour. The percentages do not move at all. Only the flour line does.

This is where percentages beat a scaled card. Doubling a recipe for two loaves doubles the salt too, and the dough is identical. Changing pans changes nothing about the formula, but it changes how the loaf bakes, and the percentage cannot see that. Bread at 65% in a 9x5 pan crowns nicely. The same dough spread into a 10-inch round bakes flat, because there is less depth to push against.

## Where Baker's Percentage Breaks Down

The system compares weights. Any card that was not weighed gives you percentages of a guess.

**Flour measured in cups.** Our conversion tables put all-purpose at 120 g per cup and bread flour at 127 g. Four scoops of bread flour at a heavy 132 g each is 528 g, not 500, so the 325 g of water reads 61.6% instead of 65%. Same card, same water, a noticeably stiffer dough. Weigh the flour once and this whole class of error disappears.

**Salt measured in spoons.** Fine sea salt runs about 6 g per teaspoon, and Diamond Crystal kosher salt about 2.8 g. A 2% salt formula weighed with the kosher salt by volume lands near 0.9% actual, which tastes flat and ferments faster. Use the scale, or use 2¼ times as much Diamond Crystal by volume.

**Whole wheat and rye.** The percentage is a weight ratio, not a promise about texture. Whole wheat absorbs 5 to 10 points more water than white flour before it feels the same, so an honest 65% whole wheat dough handles like a 57% white one.

**Any card that lists a pre-ferment as a separate line** and also lists the flour inside it. That double count is the most common way a formula stops adding up, and it is worth 10 minutes with a pencil to fix once.

## Try Our Free Tools

The [Dough Hydration Calculator](/dough-hydration-calculator/) converts flour and water in either direction and labels the result. The [Yeast Calculator](/yeast-calculator/) returns grams of instant, active dry, or fresh yeast for your flour weight, dough type, and rise schedule. The [Sourdough Calculator](/sourdough-calculator/) builds a full formula from a target dough weight and takes the starter's flour and water out of the totals. And when you would rather scale a whole written card than convert it, the [Recipe Servings Calculator](/recipe-servings-calculator/) does the multiplication and keeps the fractions usable. All free, no signup.

Baker's percentage is flour at 100% and every other ingredient divided by that weight, then multiplied by the flour weight again at whatever batch size you need. The exception is the flour itself: if it went into the bowl by the cup, the percentages describe your scooping more than they describe the bread, and no calculator can fix that after the fact.
