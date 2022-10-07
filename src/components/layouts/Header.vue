<template>
    <header>
        <nav class="navbar navbar-expand navbar-dark bg-primary py-2 ps-2">
            <div class="container-fluid">
                <router-link class='d-flex align-items-center gap-3 justify-content-center' to='/'>
                    <ion-icon class="logo-icon" size="large" name="library-sharp"></ion-icon>
                    <span class='navbar-brand my-0'>Periwinkle</span>
                </router-link>
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <router-link class="nav-link d-flex align-items-center gap-1 justify-content-center" to='/checkout'>
                            <span v-if="cartItemCount" class="checkout-num badge rounded-pill bg-info">{{ cartItemCount }}</span>
                            <ion-icon class="checkout" size="large" name="cart-sharp"></ion-icon>
                            <div class="checkout" >Checkout</div>
                        </router-link>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
</template>

<script>
export default {
    name: 'NavBar',
    props: {
        cartItemCount: Number,
    }
}
</script>

<style scoped>
    .logo-icon {
        color: var(--bs-navbar-brand-color);
    }
    .checkout {
        color: var(--bs-nav-link-color);
    }
    .nav-link:hover > .checkout {
        color: var(--bs-navbar-brand-color);
    }
</style>