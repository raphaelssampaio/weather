import { colors } from './'

export default {
  defaultMargin: { marginTop: 20 },
  shadow: {
    shadowOffset: { width: 1, height: 1 },
    shadowColor: colors.mainBlue,
    shadowOpacity: 1,
    elevation: 1,
    backgroundColor: colors.transparent,
    marginHorizontal: 5,
  },
  container: {
    alignItems: 'center',
    borderRadius: 20,
    minWidth: 350,
    minHeight: 500,
    backgroundColor: colors.cardBackground,
  },
  text: {
    fontWeight: 'bold',
    color: colors.white,
    paddingHorizontal: 15,
    paddingTop: 5,
    fontSize: 20,
    alignSelf: 'flex-start',
  },
  buttonTitleStyle: {
    fontWeight: 'bold',
    color: colors.white,
  },
  buttonStyle: {
    backgroundColor: colors.mainBlue,
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 20,
  },
  buttonContainerStyle: {
    width: '95%',
  },
  image: {
    height: 300,
    width: 300,
  },
  mainImage: {
    alignSelf: 'center',
    height: 100,
    width: 100,
  },
  loading: { marginTop: 50 },
  default: {
    flex: 1,
    backgroundColor: colors.background,
    paddingTop: 64,
    paddingHorizontal: 16,
  },
  welcome: {
    fontSize: 20,
    color: colors.white,
    textAlign: 'center',
  },
  raphael: {
    fontSize: 20,
    color: colors.white,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  containerMain: {
    marginTop: 20,
    flexDirection: 'row',
    backgroundColor: colors.background,
    justifyContent: 'center',
    alignItems: 'center',
  },
}
