curl "https://tic-tac-toe-api-development.herokuapp.com/games/60f5f61427b22b00176e7106" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
    "game": {
      "cell": {
        "index": "'"${INDEX}"'",
        "value": "'"${VALUE}"'"
      },
      "over": "'"${OVER}"'"
    }
  }'

echo

# TOKEN="bfcf02805e191a2a915cc187373de2b8" INDEX="8" VALUE="X" OVER="false" sh curl-scripts/auth/update.sh
