param(
  [ValidateSet("all", "dev", "build")]
  [string]$Scope = "all"
)

$targets = switch ($Scope) {
  "dev" { @(".next") }
  "build" { @(".next-build", "out") }
  default { @(".next", ".next-build", "out") }
}

foreach ($target in $targets) {
  if (Test-Path $target) {
    Remove-Item -LiteralPath $target -Recurse -Force
  }
}
