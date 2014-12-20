extendjs
========

Object Extend Module

### Usage
<pre>
 <code>
 var base = { hello: 'world' };
 var about = { name: 'matt' };
 var data = { val: 10 };
 var override = { val: 20 };
 
 extend(base, about, data, override);
 console.log(base); // { hello: 'world', name: 'matt', val: 20 };
 </code>
</pre>
