# `MsgEditProfile`
This message allows you to edit a previously created profile.

## Structure
````json
{
  "type": "desmos/MsgEditProfile",
  "value": {
    "new_moniker": "<Profile new moniker>",
    "name": "<Profile name>",
    "surname": "<Profile surname>",
    "bio": "<Profile biography>",
    "pictures": {
      "profile": "<URI of the profile account's picture>",
      "cover": "<URI of the profile cover picture>"
    },
    "creator": "<Desmos address that's creating the profile>"
  }
}
````

### Attributes
| Attribute | Type | Description |
| :-------: | :----: | :-------- |
| `new_moniker` | String | (Optional) New moniker of the user's profile |
| `name` | String | (Optional) Name of the user |
| `surname` | String | (Optional) Surname of the user |
| `bio` | String | (Optional) Biography of the user |
| `pictures` | Object | (Optional) Object containing all the information related to the profile's pictures |
| `creator` | String | Desmos address of the user that is editing the profile |

All the attributes will not accept the string `default` as a value because it's reserved for internal operations.


## Example
````json
{
  "type": "desmos/MsgEditProfile",
  "value": {
    "new_moniker": "Eva00",
    "name": "Rei",
    "surname": "Ayanami",
    "bio": "evaPilot",
    "pictures": {
      "profile": "https://shorturl.at/adnX3",
      "cover": "https://shorturl.at/cgpyF"
    },
    "creator": "desmos12a2y7fflz6g4e5gn0mh0n9dkrzllj0q5vx7c6t"
  }
}
````

## Message action
The action associated to this message is the following:

```
edit_profile
```

