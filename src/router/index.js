import { createWebHistory, createRouter } from "vue-router";
import ContactBook from "@/views/ContactBook.vue";
import NotFound from "@/views/NotFound.vue"; // Import NotFound component
import ContactEdit from "@/views/ContactEdit.vue"; // Import ContactEdit component

const routes = [
  {
    path: "/",
    name: "contactbook",
    component: ContactBook,
  },
  {
    path: "/contacts/:id/edit",
    name: "contact.edit",
    component: ContactEdit,
    props: true // Truyền các biến trong $route.params vào làm props
  },
  {
    path: "/:pathMatch(.*)*",
    name: "notfound",
    component: NotFound, // Use the imported NotFound component
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
