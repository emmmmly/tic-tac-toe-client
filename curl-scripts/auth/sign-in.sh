curl "https://tic-tac-toe-api-development.herokuapp.com/sign-in/" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --data '{
  "credentials": {
    "email": "'"${EMAIL}"'",
    "password": "'"${PASSWORD}"'"
  }
}'

echo


# EMAIL="nick@nic.nic" PASSWORD="123" sh curl-scripts/auth/sign-in.sh
