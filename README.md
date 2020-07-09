## Welcome to Weather App!
<img width="416" alt="temperatura" src="https://user-images.githubusercontent.com/19293727/86984455-0a7c5700-c165-11ea-832d-aea63c764b7d.png">

### Requirements

- Node v10.15.3 or greater
- NPM v6.13.4 or greater
- Yarn v1.22.4 or greater
- Cocoapods 1.9.3

### Clone & Install Dependencies

- `git clone [this repo]`
- `cd [this repo]`
- `yarn`
- `cd ios` and run `pod install`

### Start the app

- iOS: `yarn ios`
- Android: `yarn android`
- To start packager: `yarn start`

### Env file

- nano .env
- paste this code: `API_KEY = 2cd56a471ef87bcdbb8729637e791c63`

### Important

- Test it on iPhone 8 or greater for best results
- If you test on small phones it'll break the layout
- Don't test it on android, maybe it'll break the layout
- Don't test it on Simulator, it doesn't work because simulator can't get geolocation

### App screenshot
![app](https://user-images.githubusercontent.com/19293727/86982851-9f308600-c160-11ea-99f0-243f3b4f28d4.jpeg)
