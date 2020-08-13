/*
 * Напиши скрипт проверки подписки пользователя при доступе к контенту
 * - Есть три типа подписки: free, pro и vip.
 * - Получить доступ могут только пользователи pro и vip
 */

// Если Free - не разрешаем

// Если Pro - разрешаем
// ИЛИ
// Если VIP - разрешаем

const userType = 'free';

// const canAccessContent = userType === 'pro' || userType === 'vip';
// const canAccessContent = userType !== 'free';

console.log('Есть доступ к контенту? ', canAccessContent);
