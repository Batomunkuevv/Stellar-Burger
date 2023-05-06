import CheckIcon from '../../images/check.svg';
import orderDetailsStyles from './order-details.module.css';

const OrderDetails = () => {
    return (
        <div className={`${orderDetailsStyles['order-details']} pt-4 pb-20`}>
            <div className="order-details__number text text_type_digits-large mb-8">034536</div>
            <div className="order-details__caption text text_type_main-medium mb-15">идентификатор заказа</div>
            <div className={orderDetailsStyles['order-details__check']}><img src={CheckIcon} alt="Check" title="Check" /></div>
            <div className='text text_type_main-default mb-2'>Ваш заказ начали готовить</div>
            <div className='text text_type_main-default text_color_inactive'>Дождитесь готовности на орбитальной станции</div>
        </div>
    )
}

export default OrderDetails;