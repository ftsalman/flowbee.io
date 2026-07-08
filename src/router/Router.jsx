import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../layout/Layout";
import { HomePage } from "../features/home/page/HomePage";
import { FeaturesPage } from "../features/features/page/FeaturesPage";
import { IndustriesPage } from "../features/Industries/page/IndustriesPage";
import { JewelleryPlaybookPage } from "../features/JewelleryPlaybook/page/JewelleryPlaybookPage";
import { SplashPage } from "../pages/SplashPage";
import { ErrorPage } from "../pages/ErrorPage";
import { PricingPage } from "../features/pricing/page/PricingPage";
import { AffiliatePage } from "../features/Affiliate/page/AffiliatePage";
import { Blogpage } from "../features/blog/pages/Blogpage";
import { BlogReadPage } from "../features/blog-read/pages/BlogReadPage";
import { AuthLayout } from "../features/blog-admins/auth/layout/AuthLayout";
import { Loginpage } from "../features/blog-admins/auth/page/Loginpage";
import { CreateBlogPage } from "../features/blog-admins/blogs-creation/pages/CreateBlogPage";
import { TravelPlaybookPage } from "../features/travel-playbook/page/TravelPlaybookPage";
import { GroceryPlaybookPage } from "../features/grocery-playbook/page/GroceryPlaybookPage";
import { WhatsAppGuidelinesPage } from "../features/whatsApp-guidelines/page/WhatsAppGuidelinesPage";
import { PrivacypolicyPage } from "../features/privacy-policy/page/PrivacypolicyPage";
import { TermsConditionsPage } from "../features/terms-conditions/page/TermsConditionsPage";
import { GlobalPricingPage } from "../features/global-pricing/page/GlobalPricingPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "features",
        element: <FeaturesPage />,
      },
      {
        path: "industries",
        element: <IndustriesPage />,
      },
      {
        path: "industry/jewellery",
        element: <JewelleryPlaybookPage />,
      },
      {
        path: "industry/travel-and-tourism",
        element: <TravelPlaybookPage />,
      },
      {
        path: "industry/supermarket-and-grocery",
        element: <GroceryPlaybookPage />,
      },
      {
        path: "industry/:slug",
        element: <IndustriesPage />,
      },
      {
        path: "pricing",
        element: <PricingPage />,
      },
      {
        path: "affiliate",
        element: <AffiliatePage />,
      },
      {
        path: "blog",
        element: <Blogpage />,
      },
      {
        path: "read/:id",
        element: <BlogReadPage />,
      },
      {
        path: "blog/:id",
        element: <BlogReadPage />,
      },
      {
        path: "whatsapp-guidelines",
        element: <WhatsAppGuidelinesPage />,
      },
      {
        path:"privacy-policy",
        element:<PrivacypolicyPage/>
      },
      {
        path:"terms-and-conditions",
        element:<TermsConditionsPage />
      },
      {
        path:"global-pricing",
         element:<GlobalPricingPage/>

      },
    ],
  },
  {
    path: "/admin",
    element: <AuthLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Loginpage />,
      },
      {
        path: "login",
        element: <Loginpage />,
      },
      {
        path: "create-blog",
        element: <CreateBlogPage />,
      },
    ],
  },
  {
    path: "/splash",
    element: <SplashPage />,
  },
]);
