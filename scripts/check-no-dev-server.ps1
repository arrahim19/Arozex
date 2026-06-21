$listener = netstat -ano | Select-String "^\s*TCP\s+\S+:3000\s+\S+\s+LISTENING\s+\d+$"

if ($listener) {
  Write-Host "Stop npm run dev before running npm run build."
  exit 1
}
