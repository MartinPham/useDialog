#!/bin/sh -
. $(dirname "$0")/env.sh

echo "[TEST] Testing"
yarn test
echo "[TEST] Done"
