import React, { useState, } from 'react'
import { IIconProps, Text, TooltipHost } from '@fluentui/react'
import { NewProductModal } from 'modals'

export interface INewProductProps {

}

export const NewProductComponent: React.FC<INewProductProps> = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const cancelIcon: IIconProps = { iconName: 'Cancel' };


  return (
    <>
      <NewProductModal
        renderTrigger={(trigger, renderModal) => (
          <button className="product__new"
            onClick={trigger}
          >
            {renderModal()}
            <TooltipHost
              content={'Nouveau Produit'}
              id={`lksdoiwe`}
            >
              <Text variant='large'>Nouveau Produit</Text>
            </TooltipHost>
          </button>
        )}
      />
    </>
  )
}
