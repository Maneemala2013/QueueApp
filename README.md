### Dependencies
#### Install Expo
npm install -g expo-cli

#### Eslint
npm install eslint --save-dev

base) npx eslint --init
You can also run this command directly using 'npm init @eslint/config'.
Need to install the following packages:
@eslint/create-config@0.4.6
Ok to proceed? (y) y
✔ How would you like to use ESLint? · problems
✔ What type of modules does your project use? · esm
✔ Which framework does your project use? · react
✔ Does your project use TypeScript? · No
✔ Where does your code run? · browser
✔ What format do you want your config file to be in? · JavaScript
The config that you've selected requires the following dependencies:

eslint-plugin-react@latest
✔ Would you like to install them now? · Yes
✔ Which package manager do you want to use? · npm

npm install @react-native-community/eslint-config --save-dev

npm install --save-dev --save-exact prettier

### install react-navigation
--> for bottom tabs
npm install @react-navigation/bottom-tabs
npm i @react-navigation/native

--> for stack navigation
npm install react-navigation --save
npm install @react-navigation/stack --save
npm install react-native-gesture-handler --save
npm install @react-navigation/native-stack

### install Safe Area Context
npm install react-native-safe-area-context

<!-- ### install @expo/vector-icons
npm i @expo/vector-icons -->

### install icons
npm i react-native-vector-icons
npm install --save phosphor-react-native

### install react native elements
npm install @rneui/themed @rneui/base

### install datetime picker
npx expo install @react-native-community/datetimepicker

### install Rubik font
expo install @expo-google-fonts/rubik expo-font expo-app-loading
Source: https://www.npmjs.com/package/@expo-google-fonts/rubik

### install nativewind and  tailwindcss
npm install nativewind@2.0.11 --save
npm install tailwindcss@3.3.2 --save

### Run the project
npm start
Then, press i to use iOS emulator or press a to use Android emulator.
You can also download "Expo Go" app to test the QueueApp in your mobile phone. 
