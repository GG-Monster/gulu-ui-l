<template>
<button :class="{'gulu-checked':value}" 
@click="toggle" 
class="gulu-switch">
    <span></span>
</button>
</template>
<style lang="scss" >
$h:22px;
$h2:$h - 4px;
.gulu-switch{
    height: $h;
    width: $h*2;
    border: none;
    background: #bfbfbf;
    border-radius: $h/2;
    position: relative;
    > span {
    position: absolute;
    top: 2px;
    left: 2px;
    height: $h2;
    width: $h2;
    background: white;
    border-radius: $h2/2;
    transition:all 250ms;
}

    &.gulu-checked{
    background: #1890ff;
    > span{
    left:calc(55%);
}
}
&:focus{ 
    outline: none;
}
&:active{ 
    > span{
        width:$h2+4px;
    }
}
    &:gulu-checked:active{
        > span {
            width:$h2+4px;
            margin-left:-4px;
        }
    }


}

</style>
<script lang="ts">
export default{
    props:{value:Boolean,},
    setup(props,context){
    const toggle=()=>{
        context.emit('update:value',!props.value)
    }
    return {toggle}
},
}
</script>