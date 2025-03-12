<template>
  <div class="page">
    <h4>Thêm Liên hệ mới</h4>
    <ContactForm :contact="contact" @submit:contact="createContact"/>
    <p>{{ message }}</p>
  </div>
</template>

<script>
import ContactForm from "@/components/ContactForm.vue";
import ContactService from "@/services/contact.service";

export default {
  components: {
    ContactForm,
  },
  data() {
    return {
      contact: {},
      message: "",
    };
  },
  methods: {
    async createContact(data) {
      try {
        await ContactService.create(data); // Sử dụng phương thức add để thêm liên hệ mới
        alert('Liên hệ được thêm thành công.');
        this.$router.push({ name: "contactbook" });
      } catch (error) {
        console.error(error);
      }
    },
    created() {
      this.message = "";
    },
  },
};
</script>