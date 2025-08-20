<script setup>
useHeadSafe({
  title: 'movies app',
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

    <!-- لینک فونت‌ Delius -->
    <link href="https://fonts.googleapis.com/css2?family=Delius&display=swap" rel="stylesheet">
  </Head>

  <div>
    <NuxtRouteAnnouncer />

    <NuxtLayout>
      <NuxtLoadingIndicator />

      <NuxtErrorBoundary>
        <NuxtPage />
      </NuxtErrorBoundary>
    </NuxtLayout>
  </div>
</template>
