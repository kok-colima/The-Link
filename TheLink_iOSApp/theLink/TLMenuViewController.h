//
//  TLMenuViewController.h
//  theLink
//
//  Created by Herzon Rodríguez on 03/octubre/2012.
//  Copyright (c) 2012 VanillaSys. All rights reserved.
//

#import <UIKit/UIKit.h>
#import "TLGeneralViewController.h"

@interface TLMenuViewController : TLGeneralViewController <UIImagePickerControllerDelegate, UINavigationControllerDelegate>

@property (nonatomic, retain) IBOutlet UIView *cameraOverlayView;

@property (nonatomic, retain) IBOutlet UIView *photoPreviewOverlayView;

@property (nonatomic, retain) IBOutlet UIView *photoPreviewView;
@property (nonatomic, retain) IBOutlet UIImageView *photoPreviewImageView;

@property (nonatomic, retain) IBOutlet UIView *savingPhotoView;
@property (nonatomic, retain) IBOutlet UIImageView *activityImageView;

@end
