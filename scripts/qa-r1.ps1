$ErrorActionPreference = "Stop"
$video = "out/video-motion-r1.mp4"
if (-not (Test-Path $video)) { throw "Missing $video" }

Write-Host "== ffprobe =="
ffprobe -v error -select_streams v:0 -show_entries stream=codec_name,width,height,r_frame_rate -show_entries format=duration -of json $video
if ($LASTEXITCODE -ne 0) { throw "ffprobe failed" }

New-Item -ItemType Directory -Force -Path "out/qa" | Out-Null
$times = @("1","3.5","5","9","10","15","20.5","21","26.5","27")
foreach ($t in $times) {
  $out = "out/qa/frame-$t.png"
  cmd /c "ffmpeg -hide_banner -loglevel error -y -ss $t -i $video -frames:v 1 $out 2>nul"
  if ($LASTEXITCODE -ne 0) { throw "frame extraction failed at $t sec" }
}
Write-Host "Representative and exact-boundary frames written to out/qa"
