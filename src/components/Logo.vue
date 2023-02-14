<script setup lang="ts">
  
</script>

<template>
  <svg id="press" width="200" height="100" viewBox="0 0 200 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_1_2)">
        <rect width="200" height="100" fill="none"/>
        <path id="left-press" d="M8 45H-98C-99.1046 45 -100 45.8954 -100 47V53C-100 54.1046 -99.1046 55 -98 55H8C9.10457 55 10 55.8954 10 57V98C10 99.1046 10.8954 100 12 100H18C19.1046 100 20 99.1046 20 98V2C20 0.895431 19.1046 0 18 0H12C10.8954 0 10 0.89543 10 2V43C10 44.1046 9.10457 45 8 45Z" fill="black" stroke="black"/>
        <path id="right-press" d="M192 45H298C299.105 45 300 45.8954 300 47V53C300 54.1046 299.105 55 298 55H192C190.895 55 190 55.8954 190 57V98C190 99.1046 189.105 100 188 100H182C180.895 100 180 99.1046 180 98V2C180 0.895431 180.895 0 182 0H188C189.105 0 190 0.89543 190 2V43C190 44.1046 190.895 45 192 45Z" fill="black" stroke="black"/>
        <text id="long-url" x="30" y="50" fill="white" font-size="0.8em">long-url-to-shorten.com</text>
        <text id="short-url" x="80" y="50" fill="white" font-size="0.8em">short.ly</text>
      </g>
      <defs>
        <clipPath id="clip0_1_2">
        <rect width="200" height="100" fill="none"/>
        </clipPath>
      </defs>
    </svg>
</template>

<style scoped>
.logo {
  display: block;
  margin: 0 auto 2rem;
}

#left-press,
#right-press {
  --tranform-length: 28%;
  transition: transform .5s ease-in;
    
}

#long-url,
#short-url {
    transform-origin: center
}

#long-url {
  opacity: 1;
  transition: opacity .5s ease-in, transform .5s ease-in-out;
}

#short-url {
  opacity: 0;
  transform: scale(50%);
  transition: opacity .5s ease-out .4s, transform .1s ease-in-out .4s;
}

#press:hover #left-press {
  transform: translateX(var(--tranform-length));
}

#press:hover #right-press {
  transform: translateX(calc(var(--tranform-length) * -1))
}

#press:hover #long-url {
  opacity: 0;
  transform: scaleX(50%)
}

#press:hover #short-url {
  opacity: 1;
  transform: scale(100%)
}
</style>
