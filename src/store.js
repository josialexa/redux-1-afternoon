import {createStore} from 'redux'

const initialState = {
    name: '',
    category: '',
    authorFirst: '',
    authorLast: '',
    ingredients: [],
    instructions: [],
    recipes: []
}

export const UPDATE_NAME = 'UPDATE_NAME'
export const UPDATE_CATEGORY = 'UPDATE_CATEGORY'
export const UPDATE_AUTHOR_FIRST = 'UPDATE_AUTHOR_FIRST'
export const UPDATE_AUTHOR_LAST = 'UPDATE_AUTHOR_LAST'
export const UPDATE_INGREDIENTS = 'UPDATE_INGREDIENTS'
export const UPDATE_INSTRUCTIONS = 'UPDATE_INSTRUCTIONS'
export const UPDATE_RECIPES = 'UPDATE_RECIPES'
export const CLEAR_INPUTS = 'CLEAR_INPUTS'
export const DELETE_RECIPE = 'DELETE_RECIPE'

function reducer(state = initialState, action) {
    const {type, payload} = action

    switch(type) {
        case UPDATE_NAME:
            return {
                ...state,
                name: payload
            }
        case UPDATE_CATEGORY:
            return {
                ...state,
                category: payload
            }
        case UPDATE_AUTHOR_FIRST:
            return {
                ...state,
                authorFirst: payload
            }
        case UPDATE_AUTHOR_LAST:
            return {
                ...state,
                authorLast: payload
            }
        case UPDATE_INGREDIENTS:
            const updatedIngredient = [...state.ingredients, payload]
            return {
                ...state,
                ingredients: updatedIngredient
            }
        case UPDATE_INSTRUCTIONS:
            const updated = [...state.instructions, payload]
            return {
                ...state,
                instructions: updated
            }
        case UPDATE_RECIPES:
            const newRecipe = {
                name: state.name,
                category: state.category,
                authorFirst: state.authorFirst,
                authorLast: state.authorLast,
                ingredients: state.ingredients,
                instructions: state.instructions
            }

            const updatedRecipes = [...state.recipes, newRecipe]

            return {
                ...state,
                recipes: updatedRecipes
            }
        case CLEAR_INPUTS:
            return {
                ...state,
                name: '',
                category: '',
                authorFirst: '',
                authorLast: '',
                ingredients: [],
                instructions: []
            }
        case DELETE_RECIPE:
            const index = state.recipes.findIndex(v => v.name == payload.name)
            const tempRecipes = state.recipes
            tempRecipes.splice(index, 1)

            return {
                ...state,
                recipes: tempRecipes
            }
        default:
            return state
    }
}

export default createStore(reducer)