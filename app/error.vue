<template>
  <div class="error-page">
    <div class="error-container">
      <div class="error-illustration">
        <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="100" cy="100" r="90" fill="#FFEBEE" stroke="#F44336" stroke-width="4" />
          <path d="M70 70L130 130" stroke="#F44336" stroke-width="6" stroke-linecap="round" />
          <path d="M130 70L70 130" stroke="#F44336" stroke-width="6" stroke-linecap="round" />
          <circle cx="100" cy="100" r="30" fill="#F44336" opacity="0.1" />
        </svg>
      </div>

      <h1 class="error-code">{{ error.statusCode }}</h1>

      <h2 class="error-title">
        <span v-if="error.statusCode === 404">صفحه مورد نظر پیدا نشد</span>
        <span v-else-if="error.statusCode === 401">لطفاً مجدد وارد شوید</span>
        <span v-else-if="error.statusCode === 403">شما دسترسی ندارید</span>
        <span v-else-if="error.statusCode === 500">خطای سرور</span>
        <span v-else>خطایی رخ داده است</span>
      </h2>

      <p class="error-message">
        {{ errorMessage }}
      </p>

      <div class="error-actions">
        <button @click="goBack" class="btn btn-primary">
          <span class="btn-icon">←</span>
          بازگشت
        </button>

        <button @click="goHome" class="btn btn-secondary">
          <span class="btn-icon">🏠</span>
          صفحه اصلی
        </button>

        <button @click="reloadPage" class="btn btn-outline">
          <span class="btn-icon">🔄</span>
          بارگذاری مجدد
        </button>
      </div>

      <div class="error-support">
        <p>اگر مشکل ادامه داشت، با پشتیبانی تماس بگیرید</p>
        <div class="support-contacts">
          <a href="tel:+982112345678" class="contact-link">
            <span class="contact-icon">📞</span>
            ۰۲۱-۱۲۳۴۵۶۷۸
          </a>
          <a href="mailto:support@example.com" class="contact-link">
            <span class="contact-icon">✉️</span>
            support@example.com
          </a>
        </div>
      </div>
    </div>

    <div class="error-background">
      <div class="bg-shape shape-1"></div>
      <div class="bg-shape shape-2"></div>
      <div class="bg-shape shape-3"></div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: false,
});

const props = defineProps({
  error: Object
});

const errorMessage = computed(() => {
  const messages = {
    404: 'صفحه‌ای که به دنبال آن هستید وجود ندارد یا حذف شده است.',
    401: 'برای دسترسی به این صفحه باید وارد حساب کاربری خود شوید.',
    403: 'شما مجوز دسترسی به این صفحه را ندارید.',
    500: 'مشکلی در سرور پیش آمده است. لطفاً稍后 مجدد尝试 کنید.',
    503: 'سرویس در حال حاضر در دسترس نیست.',
    408: 'زمان درخواست به پایان رسیده است.'
  };

  return messages[props.error.statusCode] ||
    props.error.message ||
    'متأسفیم، خطای غیرمنتظره‌ای رخ داده است.';
});

const goBack = () => window.history.length > 1 ? window.history.back() : goHome();
const goHome = () => navigateTo('/');
const reloadPage = () => window.location.reload();
</script>

<style scoped>
.error-page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  position: relative;
  overflow: hidden;
  font-family: 'Vazirmatn', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.error-container {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  padding: 3rem;
  border-radius: 24px;
  text-align: center;
  box-shadow:
    0 20px 40px rgba(0, 0, 0, 0.1),
    0 0 0 1px rgba(255, 255, 255, 0.1);
  max-width: 500px;
  width: 100%;
  position: relative;
  z-index: 2;
}

.error-illustration {
  margin-bottom: 2rem;
  animation: bounce 2s infinite;
}

@keyframes bounce {

  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0);
  }

  40% {
    transform: translateY(-10px);
  }

  60% {
    transform: translateY(-5px);
  }
}

.error-code {
  font-size: 4rem;
  font-weight: 900;
  color: #f44336;
  margin: 0 0 0.5rem 0;
  text-shadow: 2px 2px 0px rgba(244, 67, 54, 0.1);
}

.error-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #2d3748;
  margin: 0 0 1rem 0;
  line-height: 1.4;
}

.error-message {
  font-size: 1.1rem;
  color: #718096;
  margin: 0 0 2.5rem 0;
  line-height: 1.6;
}

.error-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 2.5rem;
}

.btn {
  padding: 12px 24px;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  border: none;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
}

.btn-primary {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(102, 126, 234, 0.3);
}

.btn-secondary {
  background: #2d3748;
  color: white;
}

.btn-secondary:hover {
  background: #4a5568;
  transform: translateY(-2px);
}

.btn-outline {
  background: transparent;
  color: #667eea;
  border: 2px solid #667eea;
}

.btn-outline:hover {
  background: #667eea;
  color: white;
  transform: translateY(-2px);
}

.error-support {
  border-top: 1px solid #e2e8f0;
  padding-top: 2rem;
}

.error-support p {
  color: #718096;
  margin: 0 0 1rem 0;
  font-size: 0.9rem;
}

.support-contacts {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;
}

.contact-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #667eea;
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.3s ease;
}

.contact-link:hover {
  color: #764ba2;
}

.contact-icon {
  font-size: 1.1rem;
}

.error-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
}

.bg-shape {
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
}

.shape-1 {
  width: 300px;
  height: 300px;
  top: -150px;
  right: -150px;
  animation: float 8s infinite;
}

.shape-2 {
  width: 200px;
  height: 200px;
  bottom: -100px;
  left: -100px;
  animation: float 12s infinite 2s;
}

.shape-3 {
  width: 150px;
  height: 150px;
  top: 50%;
  left: 20%;
  animation: float 10s infinite 4s;
}

@keyframes float {

  0%,
  100% {
    transform: translateY(0) rotate(0deg);
  }

  50% {
    transform: translateY(-20px) rotate(180deg);
  }
}

@media (max-width: 640px) {
  .error-container {
    padding: 2rem 1.5rem;
    margin: 1rem;
  }

  .error-code {
    font-size: 3rem;
  }

  .error-title {
    font-size: 1.3rem;
  }

  .error-actions {
    flex-direction: column;
    align-items: center;
  }

  .btn {
    width: 100%;
    justify-content: center;
  }

  .support-contacts {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
}
</style>