import{_ as e,c as t,o as n,a}from"./app.f60ba714.js";const v='{"title":"API - Commands","description":"","frontmatter":{"title":"API - Commands"},"headers":[{"level":2,"title":"Score","slug":"score"},{"level":3,"title":"score get  : number","slug":"score-get-selector-objective-string-number"},{"level":3,"title":"score has  : boolean","slug":"score-has-selector-objective-string-boolean"},{"level":2,"title":"Name","slug":"name"},{"level":3,"title":"name get  : string","slug":"name-get-selector-string"},{"level":3,"title":"name set  : void","slug":"name-set-selector-name-string-void"},{"level":2,"title":"Inventory","slug":"inventory"},{"level":3,"title":"inventory get id  : string","slug":"inventory-get-id-slot-number-selector-string"},{"level":3,"title":"inventory get amount  : number","slug":"inventory-get-amount-slot-number-selector-number"},{"level":3,"title":"inventory get amount  [itemDataValue: number] : number","slug":"inventory-get-amount-slot-number-selector-itemid-string-itemdatavalue-number-number"},{"level":3,"title":"inventory has  : boolean","slug":"inventory-has-slot-number-selector-boolean"},{"level":3,"title":"inventory has  [itemDataValue] : boolean","slug":"inventory-has-slot-number-selector-itemid-string-itemdatavalue-boolean"},{"level":2,"title":"Chat Commands","slug":"chat-commands"},{"level":3,"title":"chatcommand register  : void","slug":"chatcommand-register-commandname-string-functionname-string-void"},{"level":2,"title":"Functions","slug":"functions"},{"level":3,"title":"mcfunction  : any","slug":"mcfunction-selector-functionname-string-arguments-any-any"},{"level":2,"title":"Logic","slug":"logic"},{"level":3,"title":"if  <command> : void","slug":"if-condition-boolean-command-void"},{"level":3,"title":"issuccess <command> : boolean","slug":"issuccess-command-boolean"},{"level":3,"title":"return <argument: any> : any","slug":"return-argument-any-any"}],"relativePath":"API/Commands.md","lastUpdated":1642391185821}',i={},o=a(`<h1 id="commands" tabindex="-1">Commands <a class="header-anchor" href="#commands" aria-hidden="true">#</a></h1><p>Reference for all built-in commands (excluding vanilla minecraft commands)</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>Built-in commands cannot be used with <code>/execute</code></p></div><h2 id="score" tabindex="-1">Score <a class="header-anchor" href="#score" aria-hidden="true">#</a></h2><h3 id="score-get-selector-objective-string-number" tabindex="-1"><code>score get &lt;selector&gt; &lt;objective: string&gt; : number</code> <a class="header-anchor" href="#score-get-selector-objective-string-number" aria-hidden="true">#</a></h3><ul><li>Returns the player&#39;s score on the objective</li></ul><div class="language-"><pre><code>$score = score has @s money
say I have %{$score} money
</code></pre></div><h3 id="score-has-selector-objective-string-boolean" tabindex="-1"><code>score has &lt;selector&gt; &lt;objective: string&gt; : boolean</code> <a class="header-anchor" href="#score-has-selector-objective-string-boolean" aria-hidden="true">#</a></h3><ul><li>Returns whether player has a score on the objective</li></ul><div class="language-"><pre><code>$hasScore = score has @s money
if %{$hasScore} say I have a score on the money objective
</code></pre></div><h2 id="name" tabindex="-1">Name <a class="header-anchor" href="#name" aria-hidden="true">#</a></h2><h3 id="name-get-selector-string" tabindex="-1"><code>name get &lt;selector&gt; : string</code> <a class="header-anchor" href="#name-get-selector-string" aria-hidden="true">#</a></h3><ul><li>Returns the entity&#39;s name</li></ul><div class="language-"><pre><code>$name = name get @e[type=vindicator,c=1]
say the nearest vindicator&#39;s name is %{$name}
</code></pre></div><h3 id="name-set-selector-name-string-void" tabindex="-1"><code>name set &lt;selector&gt; &lt;name: string&gt; : void</code> <a class="header-anchor" href="#name-set-selector-name-string-void" aria-hidden="true">#</a></h3><ul><li>Sets the names of the entities provided</li></ul><div class="language-"><pre><code>name set @e[type=vindicator] &quot;Johnny&quot;
</code></pre></div><h2 id="inventory" tabindex="-1">Inventory <a class="header-anchor" href="#inventory" aria-hidden="true">#</a></h2><h3 id="inventory-get-id-slot-number-selector-string" tabindex="-1"><code>inventory get id &lt;slot: number&gt; &lt;selector&gt; : string</code> <a class="header-anchor" href="#inventory-get-id-slot-number-selector-string" aria-hidden="true">#</a></h3><ul><li>Returns the identifier of the item at the specified slot</li></ul><div class="language-"><pre><code>
$itemId = inventory get id 0 @s
say I have a %{$itemId} in my first hotbar slot

</code></pre></div><h3 id="inventory-get-amount-slot-number-selector-number" tabindex="-1"><code>inventory get amount &lt;slot: number&gt; &lt;selector&gt; : number</code> <a class="header-anchor" href="#inventory-get-amount-slot-number-selector-number" aria-hidden="true">#</a></h3><ul><li>Returns the amount of items at the specified slot</li></ul><div class="language-"><pre><code>
$items = inventory get amount 0 @s
say I have %{$items} items in my first hotbar slot

</code></pre></div><div class="language-"><pre><code>
$items = inventory get amount -1 @s
say I have %{$items} items in my inventory

</code></pre></div><h3 id="inventory-get-amount-slot-number-selector-itemid-string-itemdatavalue-number-number" tabindex="-1"><code>inventory get amount &lt;slot: number&gt; &lt;selector&gt; &lt;itemId: string&gt; [itemDataValue: number] : number</code> <a class="header-anchor" href="#inventory-get-amount-slot-number-selector-itemid-string-itemdatavalue-number-number" aria-hidden="true">#</a></h3><ul><li>Returns the amount of items of a certain type at the specified slot</li></ul><div class="language-"><pre><code>
$sticks = inventory get amount 0 @s stick
say I have %{$sticks} sticks in my first hotbar slot

</code></pre></div><div class="language-"><pre><code>
$sticks = inventory get amount -1 @s stick
say I have %{$sticks} sticks in my inventory

</code></pre></div><h3 id="inventory-has-slot-number-selector-boolean" tabindex="-1"><code>inventory has &lt;slot: number&gt; &lt;selector&gt; : boolean</code> <a class="header-anchor" href="#inventory-has-slot-number-selector-boolean" aria-hidden="true">#</a></h3><ul><li>Returns whether the slot has an item</li></ul><div class="language-"><pre><code>
$hasItem = inventory has 0 @s
if %{$hasItem} say I have an item in my first hotbar slot

</code></pre></div><h3 id="inventory-has-slot-number-selector-itemid-string-itemdatavalue-boolean" tabindex="-1"><code>inventory has &lt;slot: number&gt; &lt;selector&gt; &lt;itemId: string&gt; [itemDataValue] : boolean</code> <a class="header-anchor" href="#inventory-has-slot-number-selector-itemid-string-itemdatavalue-boolean" aria-hidden="true">#</a></h3><ul><li>Returns whether the slot has a specific item</li></ul><div class="language-"><pre><code>
$hasStick = inventory has 0 @s stick
if %{$hasStick} say I have a stick in my first hotbar slot

</code></pre></div><div class="language-"><pre><code>
$hasStick = inventory has -1 @s stick
if %{$hasStick} say I have an stick in my inventory

</code></pre></div><h2 id="chat-commands" tabindex="-1">Chat Commands <a class="header-anchor" href="#chat-commands" aria-hidden="true">#</a></h2><h3 id="chatcommand-register-commandname-string-functionname-string-void" tabindex="-1"><code>chatcommand register &lt;commandName: string&gt; &lt;functionName: string&gt; : void</code> <a class="header-anchor" href="#chatcommand-register-commandname-string-functionname-string-void" aria-hidden="true">#</a></h3><ul><li>Registers a chat command</li></ul><div class="language-"><pre><code>
chatcommand register !examplecommand exampleFunction

</code></pre></div><h2 id="functions" tabindex="-1">Functions <a class="header-anchor" href="#functions" aria-hidden="true">#</a></h2><h3 id="mcfunction-selector-functionname-string-arguments-any-any" tabindex="-1"><code>mcfunction &lt;selector&gt; &lt;functionName: string&gt; &lt;...arguments: any[]&gt; : any</code> <a class="header-anchor" href="#mcfunction-selector-functionname-string-arguments-any-any" aria-hidden="true">#</a></h3><ul><li>Calls a defined mcfunction with the provided arguments</li></ul><div class="language-"><pre><code>
mcfunction @s exampleFunction 1 2 3 false true &quot;hello world&quot;

</code></pre></div><h2 id="logic" tabindex="-1">Logic <a class="header-anchor" href="#logic" aria-hidden="true">#</a></h2><h3 id="if-condition-boolean-command-void" tabindex="-1"><code>if &lt;condition: boolean&gt; &lt;command&gt;</code> : void <a class="header-anchor" href="#if-condition-boolean-command-void" aria-hidden="true">#</a></h3><ul><li>Runs a command if the condition boolean is true</li></ul><div class="language-"><pre><code>
$condition = return true
if %{$condition} say condition passed

</code></pre></div><h3 id="issuccess-command-boolean" tabindex="-1"><code>issuccess &lt;command&gt;</code> : boolean <a class="header-anchor" href="#issuccess-command-boolean" aria-hidden="true">#</a></h3><ul><li>Returns true if the provided command runs successfully</li></ul><div class="language-"><pre><code>
$success = issuccess testfor @a
if %{$success} say hi

</code></pre></div><h3 id="return-argument-any-any" tabindex="-1"><code>return &lt;argument: any&gt;</code> : any <a class="header-anchor" href="#return-argument-any-any" aria-hidden="true">#</a></h3><ul><li>Returns the supplied argument, useful for variable assignments</li></ul><div class="language-"><pre><code>
$x = return 1
$example = return %{$x \\* 10}

</code></pre></div><div class="language-"><pre><code>
</code></pre></div>`,55),s=[o];function r(l,c,d,m,u,h){return n(),t("div",null,s)}var b=e(i,[["render",r]]);export{v as __pageData,b as default};
