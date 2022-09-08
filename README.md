# Today learning Debugging in Chrome console 

## 40.1 Here I will learn chrome developers tools
      1. Elements
      2. Console
      3. Source
      4. Network
      5. Performance
I was use Elements, network,console tabs but don't know everything, today I will learn more and more in developers tools. Every programmer need to know developer tools, so i will start it with Jhankar Mahabub

## 40.3 Console Tab
আমরা যদি চায়, তাহলে কোন একটা function কে মনিটর করতে পারি, অথবা আমাদের website a যদি কোন event listener থাকে সেটাও monitor করতে পারি। 

      1. monitor('function or etc')
      2. unmonitor(function name)
      3. monitorEvents(events)
      4. unmonitorEvents(events)
যদি আমরা শুধু click event দেখতে চায়, তাহলে [] (third bracket) এ দিতে হবে 

        monitorEvents(elements, ['click', 'mouseout', 'etc'])

Google chrome devtools Console api নিয়ে যদি আরও জানতে চাও, তাহলে এই লিংক টা পরে নিও 

## [Google chrome console api](https://developer.chrome.com/docs/devtools/console/api/)