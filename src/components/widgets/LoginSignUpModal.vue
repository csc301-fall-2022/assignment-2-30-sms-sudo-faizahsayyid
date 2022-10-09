<template>
    <div v-if="showLoginModal" class="row">
        <div @click="$emit('close-login-modal')" aria-hidden="true" class="backdrop"></div>
        <div class="bg-primary text-light login-modal p-4 col-lg-6 col-md-8 col-11 h-75" role="document">
            <span @click="$emit('close-login-modal')" role="button" aria-hidden="true" class="close-modal">&times;</span>
            <form @submit="onSubmit" class="d-flex flex-column align-items-center justify-content-center w-100 h-100">
                <fieldset class="btn-group w-75" role="group">
                    <input @click="switchToLogin" type="radio" class="btn-check w-50" name="btnradio" id="btnradio1" :checked="isLogin">
                    <label class="btn btn-outline-light" for="btnradio1">Log In</label>
                    <input @click="switchToSignUp" type="radio" class="btn-check w-50" name="btnradio" id="btnradio2" :checked="!isLogin">
                    <label class="btn btn-outline-light" for="btnradio2">Sign Up</label>
                </fieldset>
                <fieldset class="d-flex flex-column w-75">
                    <label for="email" class="mt-4">Email:</label>
                    <input v-model="email" type="email" id="email" class="form-control px-3 w-100" required>
                    <label for="password" class="mt-4">Password:</label>
                    <input v-model="password" type="password" id="password" class="form-control w-100 px-3" required>
                </fieldset>
                <button type="submit" class="btn btn-info w-75 mt-5">{{ submitButtonText }}</button>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: 'LoginSignUpModal',
    props: {
        showLoginModal: Boolean,
    },
    data() {
        return {
            isLogin: true,
            email: "",
            password: "",
        }
    },
    computed: {
        submitButtonText() {
            return this.isLogin ? "Log In" : "Sign Up";
        }
    },
    methods: {
        switchToLogin() {
            this.isLogin = true;
        },
        switchToSignUp() {
            this.isLogin = false;
        },
        onSubmit(e) {
            e.preventDefault();
            if (this.isLogin) {
                this.$emit('on-login', this.email, this.password);
            } else {
                this.$emit('on-signup', this.email, this.password);
            }
            this.email = "";
            this.password = "";
            this.isLogin = true;
        }
    },
    emits: ['close-login-modal', 'on-login', 'on-signup']
}
</script>

<style scoped>
    .login-modal {
        z-index: 2;
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    .backdrop {
        z-index: 1;
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-color: rgba(0,0,0,0.7);
    }
    .close-modal {
        color: #919aa1;
        font-size: 2rem;
        line-height: 2rem;
        position: absolute;
        top: 10px;
        right: 15px;
    }
    .close-modal:hover {
        color: var(--bs-light);
    }
</style>