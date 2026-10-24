// 1. Входные данные
const trackVolumes = [75, 95, 110, 70, 85, 102];

// Запрос имени пользователя
const userName = prompt("Введите ваше имя:") || "Гость";

// 2. Функции для работы с массивом
function findMaxVolume(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

function filterLoudTracks(arr) {
    const loudTracks = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 90) {
            loudTracks.push(arr[i]);
        }
    }
    return loudTracks;
}

function calculateSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

function countQuietTracks(arr) {
    let count = 0;
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] <= 75) {
            count++;
            sum += arr[i];
        }
    }

    const average = count > 0 ? Math.round(sum / count) : 0;

    return { count, average };
}

// 3. Логика и вызовы функций
const maxVolume = findMaxVolume(trackVolumes);
const loudTracksArray = filterLoudTracks(trackVolumes);
const totalSum = calculateSum(trackVolumes);

const averageVolume = Math.round(totalSum / trackVolumes.length);

const quietTracksResult = countQuietTracks(trackVolumes);

// 4. ВЫВОД РЕЗУЛЬТАТОВ
alert(`Привет, ${userName}! Средняя громкость – ${averageVolume} дБ, ${loudTracksArray.length} треков – громкие.`);
console.log(`Количество тихих треков (≤ 75 дБ): ${quietTracksResult.count}`);
console.log(`Средняя громкость тихих треков: ${quietTracksResult.average} дБ`);

if (maxVolume >= 105) {
    console.warn(`Такая громкость может повредить слух – используйте наушники с ограничением.`);
}
