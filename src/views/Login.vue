<template>
  <v-app id="inspire">
    <v-content>
      <v-container
        class="fill-height"
        fluid
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col
            cols="12"
            md="4"
            sm="8"
          >
            <ValidationObserver ref="form" v-slot="{ invalid, validated, passes }">
              <v-card class="elevation-12">
                <v-toolbar
                  color="primary"
                  dark
                  flat
                >
                  <v-toolbar-title>Login</v-toolbar-title>
                </v-toolbar>
                <v-card-text>
                  <v-alert
                    v-model="alert"
                    dense
                    outlined
                    type="error"
                    dismissible
                  >
                    Usuário ou senha incorretos
                  </v-alert>
                  <v-form>
                    <VTextFieldWithValidation
                      icon="mdi-email"
                      label="E-mail"
                      rules="required|email"
                      type="email"
                      vid="email"
                      autocomplete="username"
                      v-model="user.email"
                    />

                    <VTextFieldWithValidation
                      icon="mdi-lock"
                      label="Senha"
                      rules="required|min:3"
                      type="password"
                      vid="password"
                      autocomplete="new-password"
                      v-model="user.password"/>
                  </v-form>
                </v-card-text>
                <v-card-actions>
                  <v-spacer/>
                  <v-btn color="primary" :disabled="invalid || !validated">Login</v-btn>
                </v-card-actions>
              </v-card>
            </ValidationObserver>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>t

<script>
import { ValidationObserver } from 'vee-validate';
import VTextFieldWithValidation from '@/components/Inputs/VTextFieldWithValidation.vue';

export default {
  components: {
    ValidationObserver,
    VTextFieldWithValidation,
  },
  data: () => ({
    user: {},
    alert: false,
  }),
  props: {
    source: String,
  },
};
</script>
