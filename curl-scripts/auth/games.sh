curl "https://tic-tac-toe-api-development.herokuapp.com/games/" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}"
  --data '{}'

echo

# TOKEN="bfcf02805e191a2a915cc187373de2b8" sh curl-scripts/auth/games.sh
