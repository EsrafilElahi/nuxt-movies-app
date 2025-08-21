<script setup>
useHeadSafe({
  title: 'movies app',
  titleTemplate: title => title !== 'Moovie Time' ? `${title} · Moovie Time` : title,
  meta: [
    { name: 'description', content: 'movies app' }
  ]
});

useSeoMeta({
  title: 'Movies App',
  ogTitle: 'Movies App SEO',
  description: 'This is Movies App SEO, let me tell you all about it.',
  ogDescription: 'This is Movies App SEO, let me tell you all about it.',
  ogImage: 'https://example.com/image.png',
  twitterCard: 'summary_large_image',
});
</script>

<template>

  <Head>
    <!-- اتصالات پیش‌نیاز -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin=true>

    <!-- لینک فونت‌ Barlow Condensed -->
    <link
      href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
      rel="stylesheet">
  </Head>

  <div>
    <NuxtRouteAnnouncer />
    <NuxtLoadingIndicator />

    <NuxtErrorBoundary>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </NuxtErrorBoundary>
  </div>
</template>
