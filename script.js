// 1. Входные данные
const trackVolumes = [75, 95, 110, 70, 85, 102];

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

// 3. Логика и цикл
const maxVolume = findMaxVolume(trackVolumes);
const loudTracksArray = filterLoudTracks(trackVolumes);
const totalSum = calculateSum(trackVolumes);

const averageVolume = Math.round(totalSum / trackVolumes.length);

let quietTracksCount = 0;
let quietTracksSum = 0;

for (let i = 0; i < trackVolumes.length; i++) {
    if (trackVolumes[i] <= 75) {
        quietTracksCount++;
        quietTracksSum += trackVolumes[i];
    }
}

let averageQuietVolume = 0;
if (quietTracksCount > 0) {
    averageQuietVolume = Math.round(quietTracksSum / quietTracksCount);
} else {
    averageQuietVolume = 0;
}

// 4. ВЫВОД РЕЗУЛЬТАТОВ
alert(`Средняя громкость – ${averageVolume} дБ, ${loudTracksArray.length} треков – громкие.`);
console.log(`Количество тихих треков (≤ 75 дБ): ${quietTracksCount}`);
console.log(`Средняя громкость тихих треков: ${averageQuietVolume} дБ`);

if (maxVolume >= 105) {
    console.warn(`Такая громкость может повредить слух – используйте наушники с ограничением.`);
}
