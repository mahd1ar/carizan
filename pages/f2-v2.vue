<template>
  <div>
    <div class="h-[400px] w-full overflow-hidden relative">
      <img src="/sample/sample1.jpg" alt="" />
      <!-- overlay -->
      <div class="absolute top-0 left-0 z-10 w-full h-full">
        <div class="flex items-center h-full">
          <div
            class="bg-black h-full w-full"
            style="clip-path: polygon(60% 0%, 100% 0%, 100% 100%, 40% 100%)"
          >
            <div class="container h-full">
              <div class="w-4/12 flex flex-col justify-center h-full">
                <h1 class="text-white text-6xl">متن نمونه</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div class="container my-10">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis,
          minima fuga in autem, officiis dignissimos quasi libero ipsam deserunt
          adipisci ducimus impedit aliquam vero ab optio unde enim animi.
          Quaerat. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Debitis, minima fuga in autem, officiis dignissimos quasi libero ipsam
          deserunt adipisci ducimus impedit aliquam vero ab optio unde enim
          animi. Quaerat. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Debitis, minima fuga in autem, officiis dignissimos quasi libero
          ipsam deserunt adipisci ducimus impedit aliquam vero ab optio unde
          enim animi. Quaerat. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Debitis, minima fuga in autem, officiis dignissimos
          quasi libero ipsam deserunt adipisci ducimus impedit aliquam vero ab
          optio unde enim animi. Quaerat. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Debitis, minima fuga in autem, officiis dignissimos
          quasi libero ipsam deserunt adipisci ducimus impedit aliquam vero ab
          optio unde enim animi. Quaerat. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Debitis, minima fuga in autem, officiis dignissimos
          quasi libero ipsam deserunt adipisci ducimus impedit aliquam vero ab
          optio unde enim animi. Quaerat. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Debitis, minima fuga in autem, officiis dignissimos
          quasi libero ipsam deserunt adipisci ducimus impedit aliquam vero ab
          optio unde enim animi. Quaerat.
        </p>
      </div>
    </div>

    <ShoppingCards />
    <FooterSection />
  </div>
</template>
