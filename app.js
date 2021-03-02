//verify the arg input
var arg = '';
for (let j = 0; j < process.argv.length; j++) {
arg = process.argv[j];
}

var YoutubeMp3Downloader = require("youtube-mp3-downloader");

var YD = new YoutubeMp3Downloader({
  "ffmpegPath": "/usr/local/bin/ffmpeg",        // FFmpeg binary location
  "outputPath": "./src/output",    // Output file location (default: the home directory)
  "youtubeVideoQuality": "highestaudio",  // Desired video quality (default: highestaudio)
  "queueParallelism": 2,                  // Download parallelism (default: 1)
  "progressTimeout": 2000,                // Interval in ms for the progress reports (default: 1000)
  "allowWebm": false                      // Enable download from WebM sources (default: false)
});
//Download video and save as MP3 file
YD.download(arg);
YD.on("finished", function(err, data) {
console.log(JSON.stringify(data));
});
YD.on("error", function(error) {
console.log(error);
});
YD.on("progress", function(progress) {
console.log(JSON.stringify(progress));
});