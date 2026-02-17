1) What is the difference between null and undefined?
Ans: 

undefined হলোঃ
a. কোন একটা ভ্যারিয়েবলের মান যদি ডিকলার না করি তাহলে undefined আসবে।

b. যদি কোন ফাংশন থেকে রিটার্ন করা না হয় তাহলেও undefined আসবে।

c. অবজেক্ট এর প্রোপার্টি যদি দেওয়া না থাকে তাহলেও undefined আসবে।

d. যেকোন Array এর ইনডেক্সে উপাদান না থাকলে undefined আসবে।

e. undefined এর টাইপ হলো undefined

NULL  হলোঃ
a. খালি যা ডেভেলোপার সেট করে দিবে।

b.  Null এর টাইপ হলো object 


2) What is the use of the map() function in JavaScript? How is it different from forEach()?

Ans: 
map() ব্যাবহার  করা হয় array এর প্রতিটা element কে ব্যাবহার করে নতুন array বানাতে।
forEach() ব্যাবহার  করা হয় array  তে loop চালানোর জন্য ।

3) What is the difference between == and ===?
Ans:
== শুধু Value তুলনা করে।
=== value and Type দুইটাই  তুলনা করে।   


4) What is the significance of async/await in fetching API data?
Ans: async/await asynchronous API call গুলোকে আরও readable, সহজে manage করা যায় এমন এবং debug করা সহজ করে তোলে।
async: Promise return করে ।
await: Promise resolve হওয়া পর্যন্ত অপেক্ষা করে ।

5) Explain the concept of Scope in JavaScript (Global, Function, Block).
Ans:
Global Scope: যে ভেরিয়েবল function বা block-এর বাইরে declare করা হয়,যা পুরো file থেকে access করা যায় ।
Function Scope: যে ভেরিয়েবল function-এর ভেতরে declare করা হয়, যা শুধু ওই function-এর ভেতরেই কাজ করে । 
BlockScope: যে ভেরিয়েবল { } (block)-এর ভেতরে let এবং const দিয়ে declare করা হয়,যা শুধু ওই block-এর ভেতরেই কাজ করে ।