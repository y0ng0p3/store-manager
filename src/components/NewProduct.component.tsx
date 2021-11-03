import React from 'react'
import { Text, TooltipHost } from '@fluentui/react'
import { NewProductModal } from 'modals'

export interface INewProductProps {

}

export const NewProductComponent: React.FC<INewProductProps> = () => {

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
