# Assignment_One

1. What are some differences between interfaces and types in TypeScript?
Ans: টাইপস্ক্রিপ্টে ইন্টারফেস এবং টাইপের মধ্যে কিছু পার্থক্য রয়েছে যদিও এগুলো ডেটার আকৃতি সংজ্ঞায়িত করতে ব্যবহৃত হয় এবং এগুলোর কাজ প্রায় একই।  যেমন ইন্টারফেস এর সম্ভাব্য একই নামের একাধিক ইন্টারফেস ডিক্লেয়ার করলে তারা সক্রিয়ভাবে মার্জ হয়ে যায় কিন্তু এটা টাইপ এর ক্ষেত্রে সম্ভব নয়। আবার প্রয়োক্ষেত্রে মূলত অবজেক্ট এর প্রকৃতি সংজ্ঞায়িত করতে ব্যবহৃত হয় কিন্তু অবজেক্ট ইউনিয়ন ইন্টার সেকশন আদিম টাইপ  টিউপল এবং ফাংশন সংগ্রহীত করতে টাইপ বেশি নমনীয়।

2. What is the use of the keyof keyword in TypeScript? Provide an 3. example.
Ans: কে অফ কিওয়ার্ড টি একটি অবজেক্ট টাইপ থেকে প্রপার্টির কি গুলির একটি ইউনিয়ন টাইপ তৈরি করতে ব্যবহার করা হয় এটি কোডকে আরো শক্তিশালী করে তোলে।
example: 

type Point = { x: number; y: number };
type P = keyof Point;
     
type Arrayish = { [n: number]: unknown };
type A = keyof Arrayish;
    
 
type Mapish = { [k: string]: boolean };
type M = keyof Mapish;

3. Explain the difference between any, unknown, and never types in TypeScript.
Ans: 

4. What is the use of enums in TypeScript? Provide an example of a numeric and string enum.
Ans: 

5. Provide an example of using union and intersection types in TypeScript.
Ans: 
