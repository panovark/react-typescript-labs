#!/usr/bin/env bash

is_ci() {
  [[ -n "$CI" ]] || [[ -n "$GITHUB_ACTIONS" ]]
}

print_header() {
  echo ""
  echo "  $1"
  echo ""
}

print_info() {
  echo "ℹ️  $1"
}

print_success() {
  echo "✅ $1"
}

print_error() {
  echo "❌ $1"
}

skip_hook() {
  echo "⏭️  Skipping: $1"
  exit 0
}

start_timer() {
  HOOK_START_TIME=$(date +%s)
}

end_timer() {
  local end_time=$(date +%s)
  local elapsed=$((end_time - HOOK_START_TIME))
  echo "⏱️  $1 completed in ${elapsed}s"
}

exit_with_error() {
  print_error "$1"
  echo "$2"
  exit 1
}
