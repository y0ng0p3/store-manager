import React, { ReactNode, useState } from "react";
import {
  DefaultButton,
  IconButton,
  IIconProps,
  Modal,
  PrimaryButton,
  Spinner,
  SpinnerSize,
  Text,
  TextField,
  TooltipHost,
} from "@fluentui/react";
import { IProduct } from "types";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useProductStore } from "stores";
import * as uuid from 'uuid'

const defaultProdut: IProduct = {
  name: "",
  description: "",
  price: 0,
  quantity_in_stock: 0,
  id: "",
};

// Schema validation to sure us that the user enter right values of form fields
const validationSchema = Yup.object({
  name: Yup.string().required("Champ Obligatoire !"),
  price: Yup.number().required("Champ Obligatoire !"),
  quantity_in_stock: Yup.number().required("Champ Obligatoire !"),
});

export interface INewProductModalProps {
  renderTrigger?: (
    setOpen: () => void,
    renderDialog: () => ReactNode
  ) => ReactNode;
  initialProduct?: IProduct;
}

export const NewProductModal: React.FC<INewProductModalProps> = (props) => {
  const { renderTrigger, initialProduct = defaultProdut } = props;
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const cancelIcon: IIconProps = { iconName: "Cancel" };

  const toggleHideModal = () => setIsModalOpen(!isModalOpen);

  const { update, push } = useProductStore();

  const initialValues = {
    name: initialProduct.name,
    description: initialProduct.description,
    price: initialProduct.price,
    quantity_in_stock: initialProduct.quantity_in_stock,
    id: initialProduct.id,
    
  };

  // Submit method to store changes. It's automatically triggered by default with formik
  const onSubmit = (values: any, onSubmitProps: any) => {
    onSubmitProps.setSubmitting(true)
    if (initialProduct.id && initialProduct.id !== "") {
      update(values)
    } else {
      values.id = uuid.v4()
      push(values)
    }
    console.log("updated data", values);
    onSubmitProps.setSubmitting(false);
    toggleHideModal()
  };

  // Set formik variable
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  //initialize formik here with default values coming from initialProduct

  const renderModal = () => (
    <Modal
      titleAriaId={"titleId"}
      isOpen={isModalOpen}
      onDismiss={toggleHideModal}
      isBlocking={false}
      containerClassName="modal__container"
    >
      <div className="modal__header">
        {
          (initialProduct.id && initialProduct.id !== "") ?
            <span id={"titleId"} className="ms-fontSize-24 ms-fontWeight-semibold">
              Editer le produit: {initialProduct.name}
            </span> :
            <span id={"titleId"} className="ms-fontSize-24 ms-fontWeight-semibold">
              Ajouter un produit
            </span>
        }
        <IconButton
          className="modal__rot"
          iconProps={cancelIcon}
          ariaLabel="Close popup modal"
          onClick={toggleHideModal}
        />
      </div>
      <form className="modal__body na_container" onSubmit={formik.handleSubmit}>
        <TextField
          label={"Nom du Product"}
          // name="name"
          {...formik.getFieldProps("name")}
          value={formik.values.name}
        />
        <TextField
          multiline={true}
          label={"Description du Produit"}
          {...formik.getFieldProps("description")}
          value={formik.values.description}
        />
        <TextField
          label={"Prix"}
          suffix="XAF"
          type="number"
          {...formik.getFieldProps("price")}
          value={formik.values.price + ""}
        />
        <TextField
          label={"Quantité en Stock"}
          type="number"
          {...formik.getFieldProps("quantity_in_stock")}
          value={formik.values.quantity_in_stock + ""}
        />
      <div className="modal__footer">
        <DefaultButton
          text={"Réinitialiser"}
          onClick={formik.handleReset}
        />
        <PrimaryButton
          text={"Sauvegarder"}
          type="submit"
          disabled={!(formik.dirty && formik.isValid) || formik.isSubmitting}
        />
      </div>
      </form>
    </Modal>
  );

  return <>{renderTrigger && renderTrigger(toggleHideModal, renderModal)}</>;
};
