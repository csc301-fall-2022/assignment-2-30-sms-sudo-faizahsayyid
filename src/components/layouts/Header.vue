<template>
    <header>
        <nav class="navbar navbar-expand navbar-dark bg-primary py-2 ps-2">
            <div class="container-fluid">
                <router-link class='d-flex align-items-center gap-3 justify-content-center' to='/'>
                    <ion-icon class="logo-icon" size="large" name="library-sharp"></ion-icon>
                    <span class='navbar-brand my-0'>Periwinkle</span>
                </router-link>
                <ul class="navbar-nav">
                    <li class="me-3">
                        <router-link class="nav-link d-flex align-items-center gap-1 justify-content-center" to='/checkout'>
                            <span v-if="cartItemCount" class="checkout-num badge rounded-pill bg-info">{{ cartItemCount }}</span>
                            <ion-icon class="checkout" size="large" name="cart-sharp"></ion-icon>
                            <div class="d-sm-block d-none checkout" >Checkout</div>
                        </router-link>
                    </li>
                    <li v-if="!isLoggedIn" class="login-container d-flex align-items-center gap-1 justify-content-center me-3" @click="$emit('open-login-modal')">
                        <ion-icon class="login" name="person-circle-sharp" size="large"></ion-icon>
                        <div role="button" type="link" class="nav-link login d-sm-block d-none">Log In</div>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
</template>

<script>
export default {
    name: 'AppHeader',
    props: {
        cartItemCount: Number,
        isLoggedIn: Boolean,
    },
    emits: ['open-login-modal']
}
</script>

<style scoped>
    .logo-icon {
        color: var(--bs-navbar-brand-color);
    }
    .checkout, .login {
        color: var(--bs-nav-link-color);
    }
    .nav-link:hover > .checkout {
        color: var(--bs-navbar-brand-color);
    }
    .login-container {
        cursor: pointer;
    }
    .login-container:hover > .login {
        color: var(--bs-navbar-brand-color);
    }
</style>