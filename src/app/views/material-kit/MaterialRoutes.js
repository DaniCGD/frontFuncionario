import Loadable from 'app/components/Loadable';
import { lazy } from 'react';

const AppTable = Loadable(lazy(() => import('./tables/AppTable')));
const AppForm = Loadable(lazy(() => import('./forms/AppForm')));
const AppButton = Loadable(lazy(() => import('./buttons/AppButton')));
const AppIcon = Loadable(lazy(() => import('./icons/AppIcon')));
const AppProgress = Loadable(lazy(() => import('./AppProgress')));
const AppMenu = Loadable(lazy(() => import('./menu/AppMenu')));
const AppCheckbox = Loadable(lazy(() => import('./checkbox/AppCheckbox')));
const AppSwitch = Loadable(lazy(() => import('./switch/AppSwitch')));
const AppRadio = Loadable(lazy(() => import('./radio/AppRadio')));
const AppSlider = Loadable(lazy(() => import('./slider/AppSlider')));
const AppDialog = Loadable(lazy(() => import('./dialog/AppDialog')));
const AppCustomizedDialog = Loadable(lazy(()=>import('./dialog/viewdialog/requestproces/AppCustomizedDialog')));
const AppCustomizedDialog2 = Loadable(lazy(()=>import('./dialog/viewdialog/awaitingrequest/AppCustomizedDialog')));
const AppExpansionPanelLogistics = Loadable(lazy(()=>import('./expansion-panel/viewexpansion/AppExpansionPanel')));
const AppExpansionPanelRequests = Loadable(lazy(()=>import('./expansion-panel/viewexpansion/expansionsimple/AppExpansionPanel')));
const AppSnackbar = Loadable(lazy(() => import('./snackbar/AppSnackbar')));
const AppAutoComplete = Loadable(lazy(() => import('./auto-complete/AppAutoComplete')));
const AppExpansionPanel = Loadable(lazy(() => import('./expansion-panel/AppExpansionPanel')));

const materialRoutes = [
  {
    path: '/material/table',
    element: <AppTable />,
  },
  {
    path: '/material/form',
    element: <AppForm />,
  },
  {
    path: '/material/buttons',
    element: <AppButton />,
  },
  {
    path: '/material/icons',
    element: <AppIcon />,
  },
  {
    path: '/material/progress',
    element: <AppProgress />,
  },
  {
    path: '/material/menu',
    element: <AppMenu />,
  },
  {
    path: '/material/checkbox',
    element: <AppCheckbox />,
  },
  {
    path: '/material/switch',
    element: <AppSwitch />,
  },
  {
    path: '/material/radio',
    element: <AppRadio />,
  },
  {
    path: '/material/slider',
    element: <AppSlider />,
  },
  {
    path: '/material/autocomplete',
    element: <AppAutoComplete />,
  },
  {
    path: '/material/expansion-panel',
    element: <AppExpansionPanel />,
  },
  {
    path: '/material/dialog',
    element: <AppDialog />,
  },
  {
    path: '/material/snackbar',
    element: <AppSnackbar />,
  },
  {
    path: 'material/dialog/viewdialog/requestproces',
    element: <AppCustomizedDialog/>
  },
  {
    path: 'material/dialog/viewdialog/awaitingrequest',
    element: <AppCustomizedDialog2/>
  },
  {
    path: 'material/expansion-panel/viewexpansion',
    element: <AppExpansionPanelLogistics/>
  },
  {
    path: 'material/expansion-panel/viewexpansion/expansionsimple',
    element: <AppExpansionPanelRequests/>
  },
];

export default materialRoutes;
