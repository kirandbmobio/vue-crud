import Home from './components/Home.vue';
import SignUp from './components/user/SignUp.vue';
import Login from './components/user/Login.vue';
import Profile from './components/user/Profile.vue';
import UpdateProfile from './components/user/UpdateProfile.vue';
import CreatePost from './components/todo/CreatePost.vue';
import EditPost from './components/todo/EditPost.vue';
import Posts from './components/todo/Posts.vue';

export const routes = [{
        path: '/',
        component: Home
    },
    {
        path: '/sign-up',
        component: SignUp,
        name: 'sign-up'
    },
    {
        path: '/log-in',
        component: Login,
        name: 'login',
        props: true
    },
    {
        path: '/profile',
        component: Profile,
        name: 'profile',
        props: true
    },
    {
        path: '/update-profile/:id',
        component: UpdateProfile,
        name: 'update-profile'
    },
    //Todo components
    {
        name: 'home',
        path: '/',
        component: Home
    },
    {
        name: 'create',
        path: '/create',
        component: CreatePost
    },
    {
        name: 'posts',
        path: '/posts',
        component: Posts
    },
    {
        name: 'edit',
        path: '/edit/:id',
        component: EditPost
    }
]