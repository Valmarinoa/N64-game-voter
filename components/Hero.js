function Hero() {
  return (
    <div className=" w-full z-0 max-w-lg fixed">
      <div class="absolute top-20 -left-105 w-72 h-40 bg-blue-700 rounded-full mix-blend-multiply opacity:5 filter blur-3xl animate-blob animation-delay-3000"></div>
      <div class="absolute top-0 -right-2 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply opacity:5 filter blur-3xl animate-blob animation-delay-4000"></div>
      <div class="absolute -bottom-8 left-50 w-96 h-40 bg-red-600 rounded-full mix-blend-multiply opacity:5 filter blur-3xl animate-blob animation-delay-2000"></div>
      <div class="absolute -bottom-40  left-72  w-40 h-72 bg-green-800 rounded-full mix-blend-multiply opacity:5 filter blur-3xl animate-blob animation-delay-2000"></div>
    </div>
  );
}

export default Hero;
