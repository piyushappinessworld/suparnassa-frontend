import Address from "@/components/ContactPage/Address/Address";
import Cards from "@/components/ContactPage/Cards/Cards";
import Form from "@/components/ContactPage/Form/Form";
import React from "react";

const page = () => {
  return (
    <div>
      <Cards />
      <Form />
      <Address />
    </div>
  );
};

export default page;
