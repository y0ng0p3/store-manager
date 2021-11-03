import React from 'react'
import { IconButton, IIconProps, PrimaryButton, Text, TooltipHost } from '@fluentui/react'
import { ConfirmActionDialog } from './ConfirmAction.dialog';
import { NewProductModal } from 'modals';
import { IProduct } from 'types';
import { useProductStore } from 'stores'

export interface IProductItemProps {
  product: IProduct
}

export const ProductItemComponent: React.FC<IProductItemProps> = (props) => {
  const EditIcon: IIconProps = { iconName: 'Edit' };
  const DeleteIcon: IIconProps = { iconName: 'Delete' };

  const { product } = props

  const { remove } = useProductStore()

  const deleteProduct = () => {
    console.log({ message: 'Deleting product' })
    remove(product.id)
  }

  return (
    <>
      <div className="product__item">
        <Text variant='xLarge'>{product.name}</Text>
        <Text variant='mediumPlus'>{ product.price }</Text>
        <Text variant='large'>{ product.description }</Text>
        <div className="product--stock" style={product.quantity_in_stock < 5 ? { fontWeight: 'bold' } : {}}>
          <span>Quantité en stock: </span>
          <span>{product.quantity_in_stock}</span>
        </div>
        <div className="product--actions">
          {/* Modal call as a component which allows to add or edit a product depending of if we have an initial product or not */}
          <NewProductModal
            renderTrigger={(trigger, renderModal) => (
              <TooltipHost
                content={'Editer'}
                id={`ljsd_edit`}
              >
                {renderModal()}
                <IconButton
                  iconProps={EditIcon}
                  title="Editer"
                  ariaLabel="Editer"
                  onClick={trigger}
                />
              </TooltipHost>

            )}
            initialProduct={product}
          />

          {/* Dialog component which called to confirm the deleting of a product */}
          <ConfirmActionDialog
            title="Suppression d'un produit"
            message={'Êtes-vous sûre de vouloir supprimer ce produit? Cette action est irreversible.'}
            renderTrigger={(trigger, renderDialog) => (
              <>
                <TooltipHost
                  content={'Supprimer'}
                  id={`sdoiwe_delete`}
                >
                  <IconButton
                    iconProps={DeleteIcon}
                    title="Supprimer"
                    ariaLabel="Supprimer"
                    onClick={trigger}
                  />
                </TooltipHost>
                {renderDialog()}
              </>
            )}
            renderPositive={(setOpen) => (
              <PrimaryButton
                text={'Supprimer'}
                onClick={deleteProduct}
              />
            )}
          />
        </div>
      </div>
    </>
  )
}
