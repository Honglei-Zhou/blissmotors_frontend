import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/User/Login'
import Logout from '@/components/User/Logout'
import SignUp from '@/components/User/SignUp'
import Profile from '@/components/User/Profile'
import ForgotPassword from '@/components/User/ForgotPassword'
import RegistrationCode from '@/components/User/RegistrationCodeBak'
import MyHome from '@/components/User/MyHome'
// Shopping
import ShoppingCart from '@/components/Cart/ShoppingCart'
import Payment from '@/components/Cart/StripePay'
import Product from '@/components/Cart/Product'

// import Search from '@/components/Search/Search'
import SearchVehicle from '@/components/Search/SearchVehicle'
import SearchVehicleHome from '@/components/Search/SearchVehicleHome'
import BrowseModels from '@/components/Search/BrowseModels'
import BrowseVehicleByStyle from '@/components/Search/BrowseVehicleByStyle'
import BrowseVehicleByCategory from '@/components/Search/BrowseVehicleByCategory'
import BrowseTrims from '@/components/Search/BrowseTrims'

import SearchResults from '@/components/Search/SearchResults'
import WeeklyDeal from '@/components/Deal/WeeklyDeal'

import Career from '@/components/Career/Career'
import FAQ from '@/components/FAQ/FAQ'
import Calculator from '@/components/Support/Calculator'
import HowItWorks from '@/components/HowItWorks/HowItWorks'
import TermsOfService from '@/components/Support/TermsOfService'
import WhyBlissMotors from '@/components/About/WhyBlissMotors'
import ContactUs from '@/components/About/ContactUs'

Vue.use(Router)

export const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    // User Related Part
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/logout',
      name: 'logout',
      component: Logout
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignUp
    },
    {
      path: '/forgotpassword',
      name: 'forgot-password',
      component: ForgotPassword
    },
    {
      path: '/user',
      // name: 'user',
      component: MyHome,
      children: [
        {
          path: '/profile',
          name: 'profile',
          component: Profile
        },
        {
          path: '/cart',
          name: 'shoppingcart',
          component: ShoppingCart
        },
        {
          path: '/pay',
          name: 'pay',
          component: Payment
        },
        {
          path: '',
          component: Profile
        }
      ]
    },
    {
      path: '/code',
      name: 'code',
      component: RegistrationCode
    },
    // {
    //   path: '/pay',
    //   name: 'pay',
    //   component: Payment
    // },
    {
      path: '/product',
      name: 'product',
      component: Product
    },
    // Find Deal
    // {
    //   path: '/find',

    //   component: Search,
    //   children: [
    //     {
    //       path: '/find/:make',

    //       component: BrowseModels
    //     },
    //     {
    //       path: '/find/:make/:model',

    //       component: BrowseTrims
    //     },
    //     {
    //       path: '/results',
    //       component: SearchResults
    //     },
    //     {
    //       path: '',

    //       component: SearchVehicleHome
    //     }
    //   ]
    // },
    // Search Car
    {
      path: '/research',

      component: SearchVehicle,
      children: [
        {
          path: '/research/style/:style',
          name: 'browsebystyle',
          component: BrowseVehicleByStyle
        },
        {
          path: '/research/style/:style/:make',

          component: BrowseModels
        },
        {
          path: '/research/style/:style/:make/:model',

          component: BrowseTrims
        },
        {
          path: '/research/category/:category',
          name: 'browsebycategory',
          component: BrowseVehicleByCategory
        },
        {
          path: '/research/category/:category/:make',

          component: BrowseModels
        },
        {
          path: '/research/category/:category/:make/:model',

          component: BrowseTrims
        },
        {
          path: '/research/:make',
          name: 'browsemodel',
          component: BrowseModels
        },
        {
          path: '/research/:make/:model',
          name: 'browsetrim',
          component: BrowseTrims
        },
        {
          path: '/research/results',
          name: 'results',
          component: SearchResults
        },
        {
          path: '',
          name: 'searchvhiclehome',
          component: SearchVehicleHome
        }
      ]
    },
    // Deal of Week
    {
      path: '/deal-of-week',
      name: 'weekly-deal',
      component: WeeklyDeal
    },
    // Support
    {
      path: '/faq',
      name: 'faq',
      component: FAQ
    },
    {
      path: '/calculator',
      name: 'calculator',
      component: Calculator
    },
    {
      path: '/career',
      name: 'career',
      component: Career
    },
    {
      path: '/terms-of-service',
      name: 'terms-of-service',
      component: TermsOfService
    },
    // How it works
    {
      path: '/how-it-works',
      name: 'how-it-works',
      component: HowItWorks
    },
    // About
    {
      path: '/why-blissmotors',
      name: 'why-blissmotors',
      component: WhyBlissMotors
    },
    {
      path: '/contact-us',
      name: 'contactus',
      component: ContactUs
    },
    { path: '*',
      component: Home }
  ]
})
