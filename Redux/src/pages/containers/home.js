import React, { Component } from 'react';
import HomeLayout from '../components/home-layout.js'
import Categories from '../../categories/components/categories.js'
import Related from '../components/related.js'
import ModalContainer from '../../widgets/containers/modal.js'
import Modal from '../../widgets/components/modal.js'
import HandleError from '../../error/containers/handle-error.js'
import VideoPlayer from '../../player/containers/video-player.js'
import { connect } from 'react-redux'
import { List as list } from 'immutable'
import * as actions from '../../actions/index'
import { bindActionCreators } from 'redux'


class Home extends Component{
  // state = {
  //   modalVisible: false,
  // }
  handleOpenModal = (id) => {
    // this.setState({
    //   modalVisible: true,
    //   media: media
    // })
    this.props.actions.openModal(id)
  }
  handleCloseModal = (event) =>{
    // this.setState({
    //   modalVisible : false
    // })
    this.props.actions.closeModal()
  }
  render(){
    return(
      <HandleError>
        <HomeLayout>
          <Related
            categories={this.props.categories}

          />
          <Categories
            categories={this.props.categories}
            handleOpenModal = {this.handleOpenModal}
            search={this.props.search}
            isLoading={this.props.isLoading}
          />
          {
            // Esto es un condicional, si es TRUE se renderizara ModalContainer sino no
            this.props.modal.get('visibility') &&
            <ModalContainer>
              <Modal
                handleClick={this.handleCloseModal}
              >
                <VideoPlayer
                  autoplay={true}
                  id={this.props.modal.get('mediaId')}
                  // src={this.state.media.src}
                  // title={this.state.media.title}
                />
              </Modal>
            </ModalContainer>
          }

        </HomeLayout>
      </HandleError>

    )
  }
}


function mapStateToProps(state, props){

  const categories = state.get('data').get('categories').map((categoryId) => {
    return state.get('data').get('entities').get('categories').get(categoryId)
  })

  let searchResults = list()
  const search = state.get('data').get('search');

  if (search) {
    const mediaList = state.get('data').get('entities').get('media');
    searchResults = mediaList.filter((item) => (
      item.get('author').toLowerCase().includes(search.toLowerCase())
    )).toList();
  }
  return {
    categories: categories,
    search: searchResults,
    modal: state.get('modal'),
    isLoading: state.get('isLoading').get('active'),
  }
}

function mapDispatchToProps(dispatch){
  return{
    // actions: bindActionCreators(acciones, dispatch)
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
