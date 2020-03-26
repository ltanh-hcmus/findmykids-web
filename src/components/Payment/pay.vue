<template>
    <div >
        <div id="paypal-button-container"></div>
    </div>
</template>
<script src="https://www.paypal.com/sdk/js?client-id=AZougqOyKucRxBRb-R6xthxmwf6EyV9PjUUsSgA7BpvLHQ8MQ9JOcygThdXyIjRhXFnOU7uHJzi8INex&vault=true" data-sdk-integration-source="button-factory"></script>
<script>
    paypal.Buttons({
        style: {
            shape: "rect",
            color: "gold",
            layout: "vertical",
            label: "paypal"
        },
        createSubscription: function(data, actions) {
            return actions.subscription.create({
                plan_id: "P-73694924XN7582258LZ4HXNQ"
            });
        },
        onApprove: function(data, actions) {
            alert(data.subscriptionID, status);
        }
    })
    .render("#paypal-button-container");
</script>
<script>
export default {};
</script>

<style lang="scss" scoped>
</style>