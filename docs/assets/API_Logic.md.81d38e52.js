import{_ as e,c as a,o as r,a as n}from"./app.09fbc1f3.js";const c='{"title":"API - Logic","description":"","frontmatter":{"title":"API - Logic"},"headers":[{"level":2,"title":"Comparisons","slug":"comparisons"},{"level":3,"title":"equals(val0: any, val1: any): boolean","slug":"equals-val0-any-val1-any-boolean"},{"level":3,"title":"not(val0: boolean): boolean","slug":"not-val0-boolean-boolean"},{"level":3,"title":"greaterThan(val0: number, val1: number): boolean","slug":"greaterthan-val0-number-val1-number-boolean"},{"level":3,"title":"greaterThanEqual(val0: number, val1: number): boolean","slug":"greaterthanequal-val0-number-val1-number-boolean"},{"level":3,"title":"lessThan(val0: number, val1: number): boolean","slug":"lessthan-val0-number-val1-number-boolean"},{"level":3,"title":"lessThanEqual(val0: number, val1: number): boolean","slug":"lessthanequal-val0-number-val1-number-boolean"},{"level":2,"title":"Math","slug":"math"},{"level":3,"title":"floor(val: number): number","slug":"floor-val-number-number"},{"level":3,"title":"round(val: number): number","slug":"round-val-number-number"},{"level":3,"title":"ceil(val: number): number","slug":"ceil-val-number-number"},{"level":3,"title":"trunc(val: number): number","slug":"trunc-val-number-number"},{"level":3,"title":"clamp(val: number, min: number, max: number): number","slug":"clamp-val-number-min-number-max-number-number"},{"level":3,"title":"min(...vals: number[]): number","slug":"min-vals-number-number"},{"level":3,"title":"max(...vals: number[]): number","slug":"max-vals-number-number"},{"level":2,"title":"Operators","slug":"operators"}],"relativePath":"API/Logic.md","lastUpdated":1642391860455}',l={},t=n('<h1 id="logic" tabindex="-1">Logic <a class="header-anchor" href="#logic" aria-hidden="true">#</a></h1><p>Reference for all logic handling systems, including math, operators, and comparisons</p><h2 id="comparisons" tabindex="-1">Comparisons <a class="header-anchor" href="#comparisons" aria-hidden="true">#</a></h2><h3 id="equals-val0-any-val1-any-boolean" tabindex="-1"><code>equals(val0: any, val1: any): boolean</code> <a class="header-anchor" href="#equals-val0-any-val1-any-boolean" aria-hidden="true">#</a></h3><ul><li>Returns true if the arguments match</li></ul><h3 id="not-val0-boolean-boolean" tabindex="-1"><code>not(val0: boolean): boolean</code> <a class="header-anchor" href="#not-val0-boolean-boolean" aria-hidden="true">#</a></h3><ul><li>Returns the inverse of the boolean</li><li>ex) true returns false, false returns true</li></ul><h3 id="greaterthan-val0-number-val1-number-boolean" tabindex="-1"><code>greaterThan(val0: number, val1: number): boolean</code> <a class="header-anchor" href="#greaterthan-val0-number-val1-number-boolean" aria-hidden="true">#</a></h3><ul><li>Returns true if val0 is greater than val1</li></ul><h3 id="greaterthanequal-val0-number-val1-number-boolean" tabindex="-1"><code>greaterThanEqual(val0: number, val1: number): boolean</code> <a class="header-anchor" href="#greaterthanequal-val0-number-val1-number-boolean" aria-hidden="true">#</a></h3><ul><li>Returns true if val0 is greater than or equal to val1</li></ul><h3 id="lessthan-val0-number-val1-number-boolean" tabindex="-1"><code>lessThan(val0: number, val1: number): boolean</code> <a class="header-anchor" href="#lessthan-val0-number-val1-number-boolean" aria-hidden="true">#</a></h3><ul><li>Returns true if val0 is less than val1</li></ul><h3 id="lessthanequal-val0-number-val1-number-boolean" tabindex="-1"><code>lessThanEqual(val0: number, val1: number): boolean</code> <a class="header-anchor" href="#lessthanequal-val0-number-val1-number-boolean" aria-hidden="true">#</a></h3><ul><li>Returns true if val0 is less than or equal to val1</li></ul><h2 id="math" tabindex="-1">Math <a class="header-anchor" href="#math" aria-hidden="true">#</a></h2><h3 id="floor-val-number-number" tabindex="-1"><code>floor(val: number): number</code> <a class="header-anchor" href="#floor-val-number-number" aria-hidden="true">#</a></h3><ul><li>Returns the floored version of the number</li></ul><h3 id="round-val-number-number" tabindex="-1"><code>round(val: number): number</code> <a class="header-anchor" href="#round-val-number-number" aria-hidden="true">#</a></h3><ul><li>Returns the rounded version of the number</li></ul><h3 id="ceil-val-number-number" tabindex="-1"><code>ceil(val: number): number</code> <a class="header-anchor" href="#ceil-val-number-number" aria-hidden="true">#</a></h3><ul><li>Returns the ceiled version of the number</li></ul><h3 id="trunc-val-number-number" tabindex="-1"><code>trunc(val: number): number</code> <a class="header-anchor" href="#trunc-val-number-number" aria-hidden="true">#</a></h3><ul><li>Returns the trunced version of the number</li></ul><h3 id="clamp-val-number-min-number-max-number-number" tabindex="-1"><code>clamp(val: number, min: number, max: number): number</code> <a class="header-anchor" href="#clamp-val-number-min-number-max-number-number" aria-hidden="true">#</a></h3><ul><li>Returns the clamped version of the number between the minimum and maximum values (inclusive)</li></ul><h3 id="min-vals-number-number" tabindex="-1"><code>min(...vals: number[]): number</code> <a class="header-anchor" href="#min-vals-number-number" aria-hidden="true">#</a></h3><ul><li>Returns the smallest number of the arguments</li></ul><h3 id="max-vals-number-number" tabindex="-1"><code>max(...vals: number[]): number</code> <a class="header-anchor" href="#max-vals-number-number" aria-hidden="true">#</a></h3><ul><li>Returns the largest number of the arguments</li></ul><h2 id="operators" tabindex="-1">Operators <a class="header-anchor" href="#operators" aria-hidden="true">#</a></h2><table><thead><tr><th>Operator</th><th>Description</th></tr></thead><tbody><tr><td>+</td><td>Adds the number on the right to the number on the left</td></tr><tr><td>-</td><td>Subtracts the number on the right from the number on the left</td></tr><tr><td>*</td><td>Multiplies the number on the left by the number on the right</td></tr><tr><td>/</td><td>Divides the number on the left by the number on the right</td></tr><tr><td>%</td><td>Divides the number on the left by the number on the right and returns the remainder</td></tr></tbody></table>',32),u=[t];function o(b,m,i,h,s,d){return r(),a("div",null,u)}var f=e(l,[["render",o]]);export{c as __pageData,f as default};
