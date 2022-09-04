# Phonie

## Identify the telecoms carrier from a phone number

A user is filling a form in the web application and they are required to enter their phone
number into a form field.

## Outcome

After typing the phone number into the form field, the UI indicates that it is an MTN or
GLO or Airtel or Etisalat number e.t.c (e.g if its an MTN line, it displays the MTN icon/logo
somewhere beside the form field)

Additional features:

- Adds validation - Uses the pattern attribute of the HTML form field to restrict phone
numbers to a certain carrier, i.e. it restricts valid numbers to only Airtel such that entering an
MTN/GLO number would be invalid
- Supports `+XYZ` country codes (in this case the country code`+234` for Nigeria) - Still detects the carrier even
if the user prefixed the number with their `+XYZ` country code
- Number contains at least eleven digits (e.g `07012367900` or `+2347012367900`)
- Shows auto-completion - Shows suggestions as the user starts typing the phone
number. e.g once they type `080`, show them that `0803` and `0806` and other
possible matching variants of the carrier.